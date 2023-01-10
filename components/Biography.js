import styles from "./Biography.module.css";
import { PortableText } from "@portabletext/react";

function Biography({ biography }) {
  return (
    <section className={`text-l ${styles.biography}`}>
      <PortableText value={biography?.bio} />
    </section>
  );
}

export default Biography;
