import Link from "next/link";
import { getClient } from "../../server/sanity.server";

import Loader from "../../components/Loader";
import { queryAllPosts, querySinglePost } from "../../server/sanity.queries";
import dynamic from "next/dynamic";
import Synopsis from "../../components/Synopsis";
import Stills from "../../components/singleProject/Stills";
import SingleProjectImage from "../../components/singleProject/SingleProjectImage";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function Project({ project }) {
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

  console.log(project);

  return (
    <main>
      <header>
        {title && <h1>{title}</h1>}
        {client && <h3>{client}</h3>}
      </header>
      <section className="infoSection">
        <article>
          <h4>Runtime</h4>
          <div className="text-s">{runtime}</div>
        </article>
        <article>
          <h4>Release Date</h4>
          <div className="text-s">{releaseDate}</div>
        </article>
        <article>
          <h4>World Sales</h4>
          <div className="text-s">{worldSales}</div>
        </article>
        <article>
          <h4>Festivals</h4>
          <div className="text-s">{festivals}</div>
        </article>
        {additionalFields.map((field) => {
          return (
            <article key={field._key}>
              <h4>{field.label}</h4>
              <div className="text-s">{field.value}</div>
            </article>
          );
        })}
      </section>
      <section>{poster && <SingleProjectImage image={poster} />}</section>
      {trailer && <ReactPlayer url={trailer} controls={true} />}
      {synopsis.length > 0 && (
        <section>
          <Synopsis synopsis={synopsis} />
        </section>
      )}
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
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const project = await getClient.fetch(querySinglePost(slug));

  return {
    props: {
      project: project[0],
    },
  };
}

export default Project;
