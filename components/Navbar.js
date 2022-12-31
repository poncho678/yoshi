import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

function navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Jascha Hannover</Link>
      <ul className={styles.linkWrapper}>
        <li>About</li>
        <li>Work</li>
        <li>Bio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default navbar;
