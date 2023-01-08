import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getClient } from "../../server/sanity.server";

import Loader from "../../components/Loader";
import { queryAllPosts } from "../../server/sanity.queries";

function Project({ project }) {
  const { title, stills, trailer } = project;
  return (
    <>
      <h1>{title}</h1>
      <Link href="/">Home</Link>
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
