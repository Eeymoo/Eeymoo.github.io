import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server.6212a14.js';
import 'piccolore';
import 'clsx';
import { g as generateTagSlug } from './tags.6212a14.js';
import { g as generateCategorySlug } from './categories.6212a14.js';

const $$Astro$1 = createAstro("https://blog.eeymoo.com");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, link = false } = Astro2.props;
  return renderTemplate`${tags && tags.length > 0 && renderTemplate`${maybeRenderHead()}<ul class="no-style flex gap-1 flex-wrap list-none! m-0 p-0">${tags.map((tag) => renderTemplate`<li>${link ? renderTemplate`<a${addAttribute(`/tags/${generateTagSlug(tag)}/`, "href")} class="inline-block bg-primary/10 text-primary text-sm px-2 py-1 rounded hover:bg-primary/20 transition-colors dark:bg-primary/20 dark:text-primary/90">${tag}</a>` : renderTemplate`<span class="inline-block bg-primary/10 text-primary text-sm px-2 py-1 rounded dark:bg-primary/20 dark:text-primary/90">${tag}</span>`}</li>`)}</ul>`}`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/Tags.astro", void 0);

const $$Astro = createAstro("https://blog.eeymoo.com");
const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Categories;
  const { categories, link = false } = Astro2.props;
  return renderTemplate`${categories && renderTemplate`${maybeRenderHead()}<div class="category flex items-center ml-2 text-sm h-7 py-0.5 text-gray-400 dark:text-gray-500">${link ? renderTemplate`<a${addAttribute(`/categories/${generateCategorySlug(categories)}`, "href")} class="no-style flex items-center hover:text-primary transition-colors"><svg class="mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z"></path></svg>${categories}</a>` : renderTemplate`<span class="flex items-center"><svg class="mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z"></path></svg>${categories}</span>`}</div>`}`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/Categories.astro", void 0);

export { $$Categories as $, $$Tags as a };
