import Head from "next/head";
import styles from "../styles/Home.module.css";

import Projectlist from "../components/Projectlist";
import { getClient } from "../server/sanity.server";
import { queryAllPosts, queryInfos } from "../server/sanity.queries";
import Contact from "../components/Contact";
import Biography from "../components/Biography";
import CurriculumVitae from "../components/CurriculumVitae";

function Home({ projects, infos }) {
  return (
    <>
      <Head>
        <title>{infos.siteName}</title>
        <meta property="og:title" content={infos.siteName} key="title" />
        <meta name="description" content={infos.siteDescription} />
      </Head>

      <main className={styles.main}>
        <Biography biography={infos} />
        <Projectlist projects={projects} />
        <CurriculumVitae infos={infos} />
        <Contact infos={infos} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getClient.fetch(queryAllPosts);
  const infos = await getClient.fetch(queryInfos);

  return {
    props: {
      projects,
      infos: infos[0],
      revalidate: 60,
    },
  };
}

export default Home;
