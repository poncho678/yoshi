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
          {" "}
          <Link className="btn" href="/#work">
            Work
          </Link>
        </li>
        {/* <li>Bio</li> */}
        <li>
          {" "}
          <Link className="btn" href="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
