import Link from "next/link";
import styles from "./Contact.module.css";

function Contact({ infos }) {
  const { mail } = infos;
  return (
    <section className={styles.contactWrapper}>
      <hr />
      <h1>Contact</h1>
      <section className={`text-m ${styles.linksWrapper}`}>
        <Link className="btn" href={`mailto:${mail}`}>
          {mail}
        </Link>
        <div className={`text-s ${styles.links}`}>
          <Link href="/">Data Privacy</Link>
          <Link href="/">Imprint</Link>
        </div>
      </section>
    </section>
  );
}

export default Contact;
