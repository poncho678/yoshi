import Image from "next/image";
import Link from "next/link";
import { getClient, urlFor } from "../../server/sanity.server";

import Loader from "../../components/Loader";
import { queryAllPosts } from "../../server/sanity.queries";
import dynamic from "next/dynamic";
import Synopsis from "../../components/Synopsis";
import Stills from "../../components/singleProject/Stills";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function Project({ project }) {
  const {
    title,
    client,
    stills,
    poster,
    trailer,
    runtime,
    releaseDate,
    worldSales,
    synopsis,
    team,
    festivals,
  } = project;

  console.log(project);
  console.log(stills);

  return (
    <main>
      <header>
        {title && <h1>{title}</h1>}
        {client && <h3>{client}</h3>}
      </header>
      <section>
        {poster && (
          <Image
            src={urlFor(poster).url()}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </section>
      {trailer && <ReactPlayer url={trailer} controls={true} />}
      {/* {synopsis.length > 0 && (
        <section>
          <Synopsis synopsis={synopsis} />
        </section>
      )} */}
      {stills.length > 0 && <Stills stills={stills} />}
    </main>
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
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const project = await getClient.fetch(
    `*[_type == "projects" && slug.current == "${slug}"]`
  );

  return {
    props: {
      project: project[0],
    },
  };
}

export default Project;
