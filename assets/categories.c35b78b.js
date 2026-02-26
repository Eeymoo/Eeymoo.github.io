function generateCategorySlug(category) {
  if (typeof category !== "string") return "";
  let s = category.trim();
  s = s.replace(/[!@#$%^&*()+=,.:;"'<>?`~\[\]{}]/g, "");
  s = s.replace(/\s+/g, "-");
  s = s.replace(/[_/\\]+/g, "-");
  s = s.replace(/-{2,}/g, "-");
  s = s.replace(/^-|-$/g, "");
  return s;
}

export { generateCategorySlug as g };
