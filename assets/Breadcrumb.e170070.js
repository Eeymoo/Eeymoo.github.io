import { e as createAstro, c as createComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, F as Fragment, d as addAttribute } from './astro/server.e170070.js';
import 'piccolore';
/* empty css              */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://blog.eeymoo.com");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { items, schema = true } = Astro2.props;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  return renderTemplate`${schema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(breadcrumbSchema, null, 2)))}${maybeRenderHead()}<nav aria-label="面包屑导航" class="breadcrumb-container" data-astro-cid-qaanghzh> <ol class="breadcrumb-list flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400" data-astro-cid-qaanghzh> ${items.map((item, index) => renderTemplate`<li class="breadcrumb-item flex items-center" data-astro-cid-qaanghzh> ${index < items.length - 1 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-qaanghzh": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(item.url, "href")} class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200" data-astro-cid-qaanghzh> ${item.name} </a> <svg class="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qaanghzh> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-qaanghzh></path> </svg> ` })}` : renderTemplate`<span class="text-gray-900 dark:text-gray-100 font-medium" data-astro-cid-qaanghzh>${item.name}</span>`} </li>`)} </ol> </nav> `;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
