import { e as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML } from './astro/server.960efba.js';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://blog.eeymoo.com");
const $$StructuredData = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StructuredData;
  const { type, data } = Astro2.props;
  function generateStructuredData(type2, data2) {
    const baseData = {
      "@context": "https://schema.org",
      ...data2
    };
    switch (type2) {
      case "BlogPosting":
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": data2.title,
          "description": data2.description,
          "image": data2.image ? [data2.image] : void 0,
          "datePublished": data2.datePublished,
          "dateModified": data2.dateModified || data2.datePublished,
          "author": {
            "@type": "Person",
            "name": data2.author?.name || "Eeymoo",
            "url": data2.author?.url || "https://blog.eeymoo.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": data2.publisher?.name || "Eeymoo's Blog",
            "logo": {
              "@type": "ImageObject",
              "url": data2.publisher?.logo || "https://blog.eeymoo.com/logo.svg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data2.url
          },
          "url": data2.url,
          "keywords": data2.keywords?.join(", "),
          "inLanguage": data2.inLanguage || "zh-CN",
          "isPartOf": {
            "@type": "Blog",
            "@id": data2.blogUrl || "https://blog.eeymoo.com/",
            "name": data2.blogName || "Eeymoo's Blog"
          }
        };
      case "WebPage":
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data2.name,
          "description": data2.description,
          "url": data2.url,
          "lastReviewed": data2.lastReviewed,
          "inLanguage": data2.inLanguage || "zh-CN",
          "isPartOf": {
            "@type": "WebSite",
            "@id": data2.siteUrl || "https://blog.eeymoo.com/",
            "name": data2.siteName || "Eeymoo's Blog"
          },
          "breadcrumb": data2.breadcrumb
        };
      case "BreadcrumbList":
        const breadcrumbs = data2.items?.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }));
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs
        };
      case "Article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data2.title,
          "description": data2.description,
          "image": data2.image ? [data2.image] : void 0,
          "datePublished": data2.datePublished,
          "dateModified": data2.dateModified || data2.datePublished,
          "author": {
            "@type": "Person",
            "name": data2.author?.name || "Eeymoo"
          },
          "publisher": {
            "@type": "Organization",
            "name": data2.publisher?.name || "Eeymoo's Blog"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data2.url
          },
          "url": data2.url,
          "keywords": data2.keywords?.join(", "),
          "articleSection": data2.articleSection,
          "inLanguage": data2.inLanguage || "zh-CN"
        };
      default:
        return baseData;
    }
  }
  const structuredData = generateStructuredData(type, data);
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData, null, 2)));
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/StructuredData.astro", void 0);

export { $$StructuredData as $ };
