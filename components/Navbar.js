import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={`text-s ${styles.nav}`}>
      <section>
        <Link className="btn" href="/">
          Jascha Hannover
        </Link>
      </section>
      <ul className={styles.linkWrapper}>
        <li>
          <Link className="btn" href="/">
            About
          </Link>
        </li>
        <li>
          <Link className="btn" href="/#work" scroll={false}>
            Work
          </Link>
        </li>
        <li>
          <Link className="btn" href="/#curriculumVitae" scroll={false}>
            Biography
          </Link>
        </li>
        <li>
          <Link className="btn" href="/#contact" scroll={false}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
