import Image from "next/image";
import { urlFor } from "../../server/sanity.server";

function SingleProjectImage({ image }) {
  console.log("image", image);
  return (
    <Image
      src={urlFor(image).url()}
      blurDataURL={image.asset.metadata.lqip}
      placeholder="blur"
      alt=""
      width="0"
      height="0"
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
}

export default SingleProjectImage;
