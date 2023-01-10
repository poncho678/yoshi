export const queryAllPosts = `*[_type == "projects" && published]|order(orderRank)`;
export const queryInfos = `*[_type == "infos"]`;
