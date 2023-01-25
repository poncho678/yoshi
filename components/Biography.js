import styles from "./Biography.module.css";
import { PortableText } from "@portabletext/react";

function Biography({ biography }) {
  return (
    <section id="about" className={`text-l ${styles.about}`}>
      <PortableText value={biography?.bio} />
    </section>
  );
}

export default Biography;
