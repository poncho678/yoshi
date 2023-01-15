import Link from "next/link";
import styles from "./Contact.module.css";

function Contact({ infos }) {
  const { mail } = infos;
  return (
    <section id="contact" className={styles.contactWrapper}>
      <section>
        <hr />
        <h1>Contact</h1>
      </section>
      <section className={`text-m ${styles.linksWrapper}`}>
        <Link className="btn" href={`mailto:${mail}`}>
          {mail}
        </Link>
        <div className={`text-s ${styles.links}`}>
          <Link className="btn" href="/">
            Data Privacy
          </Link>
          <Link className="btn" href="/">
            Imprint
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Contact;
