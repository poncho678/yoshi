import styles from "./InfoSection.module.css";
import { returnYear } from "../../utils/helper";
import SingleProjectImage from "./SingleProjectImage";
import { PortableText } from "@portabletext/react";

function InfoSection({ project }) {
  const {
    title = "",
    client = "",
    poster = {},
    runtime = "",
    releaseDate = "",
    worldSales = "",
    team = [],
    festivals = "",
    additionalFields = [],
  } = project;

  return (
    <>
      <section className={styles.infoSection}>
        {title && (
          <article className={styles.itemWrapper}>
            <h4>Title</h4>
            <div className="text-s">{title}</div>
          </article>
        )}
        {client && (
          <article className={styles.itemWrapper}>
            <h4>Client</h4>
            <div className="text-s">{client}</div>
          </article>
        )}
        {poster.asset && (
          <article className={styles.posterWrapper}>
            <SingleProjectImage image={poster} />
          </article>
        )}
        {returnYear(releaseDate) && (
          <article className={styles.itemWrapper}>
            <h4>Release Date</h4>
            <div className="text-s">{returnYear(releaseDate)}</div>
          </article>
        )}
        {runtime && (
          <article className={styles.itemWrapper}>
            <h4>Runtime</h4>
            <div className="text-s">{runtime}</div>
          </article>
        )}
        {worldSales && (
          <article className={styles.itemWrapper}>
            <h4>World Sales</h4>
            <div className="text-s">{worldSales}</div>
          </article>
        )}
        {team.length > 0 && (
          <article className={styles.itemWrapper}>
            <h4>Team</h4>
            <div className="text-s">
              <PortableText value={team} />
            </div>
          </article>
        )}
        {festivals && (
          <article className={styles.itemWrapper}>
            <h4>Festivals</h4>
            <div className="text-s">{festivals}</div>
          </article>
        )}

        {additionalFields.map((field) => {
          return (
            <article key={field._key} className={styles.itemWrapper}>
              <h4>{field.label}</h4>
              <div className="text-s">{field.value}</div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default InfoSection;
