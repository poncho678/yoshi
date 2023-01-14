export const queryAllPosts = `*[_type == "projects" && published]|order(orderRank){
  ...,
  'featuredImage' : {...featuredImage, 'asset': featuredImage.asset->},
  'poster': {...poster, 'asset': poster.asset->},
  'stills': stills[]{..., asset->}
}`;
export const queryInfos = `*[_type == "infos"]`;
export const querySinglePost = (slug) =>
  `*[_type == "projects" && slug.current == "${slug}"]{
    ...,
  'featuredImage' : {...featuredImage, 'asset': featuredImage.asset->},
  'poster': {...poster, 'asset': poster.asset->},
  'stills': stills[]{..., asset->}
  }`;
