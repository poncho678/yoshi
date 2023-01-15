import dynamic from "next/dynamic";
import { useState } from "react";
import Loader from "../Loader";
import styles from "./Trailer.module.css";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function Trailer({ trailer, poster }) {
  const [isLoading, setIsLoading] = useState(true);
  console.log(poster.asset);

  const isLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      {trailer && (
        <section className={styles.videoContainer}>
          <article
            className={`${styles.videoWrapper} ${
              isLoading ? "" : styles.loaded
            }`}
          >
            {isLoading && <Loader />}
            <ReactPlayer
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
