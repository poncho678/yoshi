import styles from "./Synopsis.module.css";
import { PortableText } from "@portabletext/react";

function Synopsis({ synopsis = [] }) {
  return (
    <>
      {synopsis.length > 0 && (
        <article className={styles.synopsis}>
          <PortableText value={synopsis} />
        </article>
      )}
    </>
  );
}

export default Synopsis;
