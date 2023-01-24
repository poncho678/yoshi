import React from "react";
import styles from "./Loader.module.css";

function Loader({ loading }) {
  return (
    <article
      className={`${styles.loader} ${loading && styles.loading}`}
    ></article>
  );
}

export default Loader;
