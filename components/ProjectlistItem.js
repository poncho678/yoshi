import styles from "./ProjectlistItem.module.css";
import Link from "next/link";
import Synopsis from "./Synopsis";
import ProjectImage from "./ProjectImage";
import { returnYear } from "../utils/helper";

function ProjectlistItem({ data, index }) {
  const { title, featuredImage, synopsis, slug, runtime, releaseDate } = data;
  index = index < 10 ? `0${index + 1}` : index + 1;

  console.log(featuredImage);

  return (
    <article className={styles.projectWrapper}>
      <section className={styles.basicInfoWrapper}>
        <div className={styles.basicInfo}>
          <section>
            <h2 className={styles.title}>
              {/* <span className={styles.index}>{index}</span>{" "} */}
              <Link href={`/projects/${slug.current}`}>{title}</Link>
            </h2>
            <h4 className={styles.yearAndDate}>
              {returnYear(releaseDate)}
              {returnYear(releaseDate) && runtime && ", "}
              {runtime}
            </h4>
          </section>
          {synopsis && (
            <section className={`text-s ${styles.synopsis}`}>
              <Synopsis synopsis={synopsis} />
            </section>
          )}
        </div>

        <footer>
          <Link href={`/projects/${slug.current}`} className="h3 btn">
            Info
          </Link>
        </footer>
      </section>

      {featuredImage.asset && (
        <section className={styles.featuredImageWrapper}>
          <div className={styles.featuredImageContainer}>
            <Link href={`/projects/${slug.current}`}>
              <ProjectImage image={featuredImage} />
            </Link>
          </div>
        </section>
      )}
    </article>
  );
}

export default ProjectlistItem;
