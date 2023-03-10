import Head from "next/head";
import styles from "../../styles/SingleProject.module.css";
import { getClient, urlFor } from "../../server/sanity.server";
import { toPlainText } from "@portabletext/react";

import {
  queryAllPosts,
  queryInfos,
  querySinglePost,
} from "../../server/sanity.queries";
import Synopsis from "../../components/Synopsis";
import Stills from "../../components/singleProject/Stills";
import InfoSection from "../../components/singleProject/InfoSection";
import Trailer from "../../components/singleProject/Trailer";

function Project({ project, infos }) {
  const {
    title = "",
    featuredImage,
    synopsis = [],
    trailer = "",
    stills = [],
  } = project;

  return (
    <>
      <Head>
        <title>{title.length && `${infos.siteName} | ${title}`}</title>
        <meta name="description" content={toPlainText(synopsis)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} key="title" />
        <meta
          property="og:image"
          content={urlFor(featuredImage).url()}
          key="title"
        />
      </Head>

      <main className={styles.singleProject}>
        <header>{title && <h1>{title}</h1>}</header>
        <InfoSection project={project} />
        <Trailer trailer={trailer} poster={featuredImage} />
        {synopsis !== null && synopsis.length > 0 && (
          <section className={`text-m ${styles.synopsis}`}>
            <Synopsis synopsis={synopsis} />
          </section>
        )}
        <Stills stills={stills} />
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
    fallback: "blocking",
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
    },
    revalidate: 60,
  };
}

export default Project;
