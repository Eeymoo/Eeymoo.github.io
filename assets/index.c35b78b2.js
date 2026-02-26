import crypto from 'crypto';

const SITE_TITLE = "Eeymoo' Blog";
const SITE_DESCRIPTION = "Eeymoo' BLOG 记录 Eeymoo 的 BLOG";
const SITE_URL = "https://blog.eeymoo.com";

function generatePostSlug(input, fallbackPrefix = "temporary-url") {
  if (typeof input === "object") {
    if (input.data.uri) {
      return input.data.uri;
    }
    const text = input.id;
    const slug2 = generateSlugFromText(text);
    return slug2 || `${fallbackPrefix}/` + crypto.createHash("sha256").update(input.id, "utf8").digest("hex").slice(0, 32);
  }
  const slug = generateSlugFromText(input);
  return slug || `${fallbackPrefix}-${crypto.createHash("sha256").update(input, "utf8").digest("hex").slice(0, 8)}`;
}
function generateSlugFromText(text) {
  if (typeof text !== "string" || !text.trim()) return "";
  let s = text.trim();
  s = s.replace(/[!@#$%^&*()+=,.:;"'<>?`~\[\]{}]/g, "");
  s = s.replace(/\s+/g, "-");
  s = s.replace(/[_/\\]+/g, "-");
  s = s.replace(/-{2,}/g, "-");
  s = s.replace(/^-|-$/g, "");
  return s;
}
function generateColorFromHash(hash) {
  if (!hash) return "#666666";
  const hexRegex = /^[0-9a-f]+$/i;
  if (hexRegex.test(hash) && hash.length >= 6) {
    return `#${hash.substring(0, 6)}`;
  }
  let hashValue = 5381;
  for (let i = 0; i < hash.length; i++) {
    hashValue = hashValue * 33 ^ hash.charCodeAt(i);
  }
  const r = (hashValue & 16711680) >> 16;
  const g = (hashValue & 65280) >> 8;
  const b = hashValue & 255;
  const adjust = (c) => {
    const adjusted = Math.floor(100 + c / 255 * 100);
    return adjusted.toString(16).padStart(2, "0");
  };
  return `#${adjust(r)}${adjust(g)}${adjust(b)}`;
}

export { SITE_DESCRIPTION as S, SITE_TITLE as a, SITE_URL as b, generateColorFromHash as c, generatePostSlug as g };
