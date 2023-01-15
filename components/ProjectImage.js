import Image from "next/image";
import React from "react";
import { urlFor } from "../server/sanity.server";

function ProjectImage({ image }) {
  if (!image.asset) {
    return;
  }

  return (
    <Image
      blurDataURL={image.asset.metadata.lqip}
      placeholder="blur"
      src={urlFor(image).url()}
      alt=""
      sizes="100vw"
      layout="fill"
      objectFit="cover"
    />
  );
}

export default ProjectImage;
