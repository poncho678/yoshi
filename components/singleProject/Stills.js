import Image from "next/image";
import { urlFor } from "../../server/sanity.server";
import styles from "./Stills.module.css";

function Stills({ stills }) {
  return (
    <section className={styles.stillsWrapper}>
      {stills.map((still) => {
        return (
          <Image
            src={urlFor(still).url()}
            alt={still._key}
            key={still._key}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        );
      })}
    </section>
  );
}

export default Stills;
