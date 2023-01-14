import styles from "./ProjectlistItem.module.css";
import Link from "next/link";
import Synopsis from "./Synopsis";
import ProjectImage from "./ProjectImage";

function ProjectlistItem({ data, index }) {
  const { title, featuredImage, synopsis, slug } = data;
  index = index < 10 ? `0${index + 1}` : index + 1;

  return (
    <article className={styles.projectWrapper}>
      <section className={styles.basicInfoWrapper}>
        <div className={styles.basicInfo}>
          <section>
            <h2 className={styles.title}>
              <span className={styles.index}>{index}</span>{" "}
              <Link href={`/projects/${slug.current}`}>{title}</Link>
            </h2>
          </section>
          {synopsis && (
            <section className={styles.synopsis}>
              <Synopsis synopsis={synopsis} />
            </section>
          )}
        </div>

        <footer>
          <Link href={`/projects/${slug.current}`} className="h2 btn">
            Info
          </Link>
        </footer>
      </section>

      <section className={styles.featuredImageWrapper}>
        <div className={styles.featuredImageContainer}>
          <Link href={`/projects/${slug.current}`}>
            <ProjectImage image={featuredImage} />
          </Link>
        </div>
      </section>
    </article>
  );
}

export default ProjectlistItem;
