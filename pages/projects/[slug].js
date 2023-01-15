import { getClient } from "../../server/sanity.server";
import Head from "next/head";
import Loader from "../../components/Loader";
import {
  queryAllPosts,
  queryInfos,
  querySinglePost,
} from "../../server/sanity.queries";
import dynamic from "next/dynamic";
import Synopsis from "../../components/Synopsis";
import Stills from "../../components/singleProject/Stills";
import InfoSection from "../../components/singleProject/InfoSection";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function Project({ project, infos }) {
  const {
    title = "",
    client = "",
    poster = {},
    runtime = "",
    releaseDate = "",
    worldSales = "",
    team = [],
    festivals = "",
    synopsis = [],
    trailer = "",
    stills = [],
    additionalFields = [],
  } = project;

  return (
    <>
      <Head>
        <title>
          {infos.siteName} | {title}
        </title>
        <meta name="description" content={infos.siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>{title && <h1>{title}</h1>}</header>
        <InfoSection project={project} />
        {trailer && <ReactPlayer url={trailer} controls={true} />}
        {synopsis.length > 0 && (
          <section>
            <Synopsis synopsis={synopsis} />
          </section>
        )}
        {stills.length > 0 && <Stills stills={stills} />}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await getClient.fetch(queryAllPosts);
  const paths = res.map((item) => {
    return {
      params: { slug: item.slug.current },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const project = await getClient.fetch(querySinglePost(slug));
  const infos = await getClient.fetch(queryInfos);

  return {
    props: {
      infos: infos[0],
      project: project[0],
      revalidate: 60 * 5,
    },
  };
}

export default Project;
