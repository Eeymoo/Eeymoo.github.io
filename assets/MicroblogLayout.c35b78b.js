import { e as createAstro, c as createComponent, r as renderComponent, b as renderHead, a as renderTemplate, d as addAttribute } from './astro/server.c35b78b.js';
import 'piccolore';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Header.c35b78b.js';
import { g as generatePostSlug, S as SITE_DESCRIPTION, a as SITE_TITLE } from './index.c35b78b2.js';

const $$Astro = createAstro("https://blog.eeymoo.com");
const $$MicroblogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MicroblogLayout;
  const {
    title,
    posts,
    speculationUrls = ["/", "/post", "/categories", "/tags", "/archives"],
    speculationEagerness = "lazy"
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${SITE_TITLE} \xB7 ${title}`, "description": SITE_DESCRIPTION, "speculationUrls": speculationUrls, "speculationEagerness": speculationEagerness })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="w-full max-w-285 mx-auto px-4 py-12"> <section> <h1 class="m-0 mb-6 text-xl font-bold text-gray-900 dark:text-gray-100"> ${title} </h1> <nav class="mb-6 flex gap-4 text-sm"> <a href="/microblog/" class="text-blue-600 dark:text-blue-400 hover:underline">Home</a> <a href="/microblog/latest/" class="text-blue-600 dark:text-blue-400 hover:underline">Latest</a> <a href="/microblog/today/" class="text-blue-600 dark:text-blue-400 hover:underline">Today</a> <a href="/microblog/all/" class="text-blue-600 dark:text-blue-400 hover:underline">All Microblog</a> </nav> ${posts.length === 0 ? renderTemplate`<p class="text-gray-600 dark:text-gray-300">暂无内容。</p>` : renderTemplate`<ul class="list-none m-0 p-0 space-y-4"> ${posts.map((post) => {
    const slug = generatePostSlug(post);
    return renderTemplate`<li class="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"> <div class="mb-2 text-sm text-gray-400 dark:text-gray-500"> ${post.data.date && new Date(post.data.date).toLocaleString("zh-CN")} </div> <div class="text-base prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300"> ${renderComponent($$result, "post.html.Content", post.html.Content, {})} </div> <a${addAttribute(`/microblog/${slug}`, "href")} class="mt-2 inline-block text-sm text-primary hover:text-primary/80 transition-colors">
查看详情 →
</a> </li>`;
  })} </ul>`} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/layouts/MicroblogLayout.astro", void 0);

export { $$MicroblogLayout as $ };
