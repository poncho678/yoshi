import Image from "next/image";
import React from "react";
import { urlFor } from "../server/sanity.server";

function ProjectImage({ image }) {
  return (
    <Image
      blurDataURL={image.asset.metadata.lqip}
      placeholder="blur"
      src={urlFor(image).url()}
      alt=""
      layout="fill"
      objectFit="cover"
    />
  );
}

export default ProjectImage;
