import SingleProjectImage from "./SingleProjectImage";
import styles from "./Stills.module.css";

function Stills({ stills = [] }) {
  if (stills === null || stills.length === 0) {
    return;
  }

  return (
    <section className={styles.stillsWrapper}>
      {stills.map((still) => {
        return <SingleProjectImage key={still._key} image={still} />;
      })}
    </section>
  );
}

export default Stills;
