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
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}
function getContrastRatio(color1, color2) {
  const l1 = getLuminance(color1.r, color1.g, color1.b);
  const l2 = getLuminance(color2.r, color2.g, color2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
}
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map((c) => {
    c = Math.round(Math.max(0, Math.min(255, c)));
    return c.toString(16).padStart(2, "0");
  }).join("");
}
function adjustBrightness(r, g, b, factor) {
  return {
    r: Math.min(255, r * factor),
    g: Math.min(255, g * factor),
    b: Math.min(255, b * factor)
  };
}
function ensureAAContrastColor(hexColor) {
  const rgb = hexToRgb(hexColor);
  const whiteBg = { r: 255, g: 255, b: 255 };
  const darkBg = { r: 15, g: 23, b: 42 };
  const AA_RATIO = 4.5;
  let adjustedRgb = { ...rgb };
  let contrastOnWhite = getContrastRatio(adjustedRgb, whiteBg);
  let contrastOnDark = getContrastRatio(adjustedRgb, darkBg);
  if (contrastOnWhite < AA_RATIO && contrastOnDark < AA_RATIO) {
    const luminance = getLuminance(adjustedRgb.r, adjustedRgb.g, adjustedRgb.b);
    const midLuminance = 0.5;
    if (luminance < midLuminance) {
      let factor = 1.1;
      while (factor <= 3) {
        const testRgb = adjustBrightness(rgb.r, rgb.g, rgb.b, factor);
        const testContrastDark = getContrastRatio(testRgb, darkBg);
        if (testContrastDark >= AA_RATIO) {
          adjustedRgb = testRgb;
          break;
        }
        factor += 0.05;
      }
    } else {
      let factor = 0.9;
      while (factor >= 0.2) {
        const testRgb = adjustBrightness(rgb.r, rgb.g, rgb.b, factor);
        const testContrastWhite = getContrastRatio(testRgb, whiteBg);
        if (testContrastWhite >= AA_RATIO) {
          adjustedRgb = testRgb;
          break;
        }
        factor -= 0.05;
      }
    }
  }
  return rgbToHex(adjustedRgb.r, adjustedRgb.g, adjustedRgb.b);
}
function generateColorFromHash(hash) {
  if (!hash) return "#666666";
  let rawColor;
  const hexRegex = /^[0-9a-f]+$/i;
  if (hexRegex.test(hash) && hash.length >= 6) {
    rawColor = `#${hash.substring(0, 6)}`;
  } else {
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
    rawColor = `#${adjust(r)}${adjust(g)}${adjust(b)}`;
  }
  return ensureAAContrastColor(rawColor);
}

export { SITE_DESCRIPTION as S, SITE_TITLE as a, SITE_URL as b, generateColorFromHash as c, generatePostSlug as g };
