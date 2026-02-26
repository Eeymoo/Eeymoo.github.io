function filterContent(posts, filterType = "default") {
  if (!Array.isArray(posts)) return [];
  let filteredPosts = posts.filter((post) => post?.data?.hidden !== true);
  if (filterType === "default") {
    return filteredPosts.filter((post) => post?.data?.categories !== "microblog");
  } else if (filterType === "microblog") {
    return filteredPosts.filter((post) => post?.data?.categories === "microblog");
  }
  return filteredPosts;
}

export { filterContent as f };
