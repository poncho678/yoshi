import styles from "./Synopsis.module.css";
import { PortableText } from "@portabletext/react";

function Synopsis({ synopsis }) {
  if (!synopsis) {
    return;
  }
  return (
    <article className={styles.synopsis}>
      <PortableText value={synopsis} />
    </article>
  );
}

export default Synopsis;
