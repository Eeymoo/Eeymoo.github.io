function generateTagSlug(tag) {
  if (typeof tag !== "string") return "";
  let s = tag.trim();
  s = s.replace(/[!@#$%^&*()+=,.:;"'<>?`~\[\]{}]/g, "");
  s = s.replace(/\s+/g, "-");
  s = s.replace(/[_/\\]+/g, "-");
  s = s.replace(/-{2,}/g, "-");
  s = s.replace(/^-|-$/g, "");
  return s;
}

export { generateTagSlug as g };
