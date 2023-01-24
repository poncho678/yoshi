import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../server/sanity.server";
import Loader from "./Loader";
import styles from "./ProjectImage.module.css";

function ProjectImage({ image }) {
  const [isLoading, setIsLoading] = useState(true);

  const Loaded = () => {
    setIsLoading(false);
  };

  if (!image.asset) {
    return;
  }

  return (
    <>
      {isLoading && <Loader loading={true} />}
      <Image
        blurDataURL={image.asset.metadata.lqip}
        placeholder="blur"
        src={urlFor(image).url()}
        alt=""
        onLoadingComplete={Loaded}
        sizes="100vw"
        layout="fill"
        objectFit="cover"
      />
    </>
  );
}

export default ProjectImage;
