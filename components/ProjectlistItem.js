import Image from "next/image";
import styles from "./ProjectlistItem.module.css";
import { urlFor } from "../server/sanity.server";
import Link from "next/link";
import Synopsis from "./Synopsis";

function ProjectlistItem({ data }) {
  const { title, featuredImage, synopsis, slug } = data;

  return (
    <article className={styles.projectWrapper}>
      <section className={styles.basicInfoWrapper}>
        <div>
          <div>{title}</div>
          {synopsis && <Synopsis synopsis={synopsis} />}
        </div>

        <footer>
          <Link href={`/projects/${slug.current}`}>Info</Link>
        </footer>
      </section>

      <section className={styles.featuredImageWrapper}>
        <div className={styles.featuredImageContainer}>
          <Image
            src={urlFor(featuredImage).url()}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </article>
  );
}

export default ProjectlistItem;
