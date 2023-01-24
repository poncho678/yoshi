import dynamic from "next/dynamic";
import { useState } from "react";
import Loader from "../Loader";
import styles from "./Trailer.module.css";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function Trailer({ trailer, poster }) {
  const [isLoading, setIsLoading] = useState(true);

  const isLoaded = () => {
    setIsLoading(false);
  };
  console.log("trailer", isLoading && "whatever");
  return (
    <>
      {trailer && (
        <section className={styles.videoContainer}>
          <article
            className={`${styles.videoWrapper} ${
              isLoading ? "" : styles.loaded
            }`}
          >
            <Loader loading={isLoading} />
            <ReactPlayer
              className={`${styles.trailer} ${isLoading ? styles.loaded : ""}`}
              url={trailer}
              controls={true}
              onReady={isLoaded}
              width="100%"
              height="100%"
            />
          </article>
        </section>
      )}
    </>
  );
}

export default Trailer;
