import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../../server/sanity.server";
import Loader from "../Loader";
import styles from "./SingleProjectImage.module.css";

function SingleProjectImage({ image }) {
  const [isLoading, setIsLoading] = useState(true);
  const Loaded = () => {
    setIsLoading(false);
  };
  if (!image.asset) {
    return;
  }

  return (
    <div className={styles.imageWrapper}>
      {isLoading && <Loader loading={isLoading} />}
      <Image
        src={urlFor(image).url()}
        blurDataURL={image.asset.metadata.lqip}
        placeholder="blur"
        alt={image.description ? image.description : ""}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        onLoadingComplete={Loaded}
      />
    </div>
  );
}

export default SingleProjectImage;
