import { createClient } from "next-sanity";
import { config } from "./sanity.config";
import createImageUrlBuilder from "@sanity/image-url";

export const getClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
