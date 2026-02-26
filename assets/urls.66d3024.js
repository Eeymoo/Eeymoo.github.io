import { g as generatePostSlug } from './index.66d30242.js';

function getPostUrl(entry) {
  const slug = generatePostSlug(entry);
  return `/post/${slug}.html`;
}
function getPostAbsUrl(entry, siteUrl) {
  return `${siteUrl}${getPostUrl(entry)}`;
}

export { getPostAbsUrl as a, getPostUrl as g };
