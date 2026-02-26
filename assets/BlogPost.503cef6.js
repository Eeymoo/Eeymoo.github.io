import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, b as renderHead, g as renderSlot } from './astro/server.503cef6.js';
import 'piccolore';
import { $ as $$Image } from './_astro_assets.503cef6.js';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Header.503cef6.js';
import { $ as $$PostDate } from './PostDate.503cef6.js';
import { $ as $$Categories, a as $$Tags } from './Categories.503cef62.js';
import 'clsx';
import { $ as $$Tips } from './Tips.503cef6.js';
import { $ as $$StructuredData } from './StructuredData.503cef6.js';
import { $ as $$Breadcrumb } from './Breadcrumb.503cef6.js';
import { g as getCollection } from './_astro_content.503cef6.js';
import { f as filterContent } from './filterContent.503cef6.js';
import { g as getPostUrl } from './urls.503cef6.js';
import { $ as $$Comments } from './Comments.503cef6.js';

const $$Astro$2 = createAstro("https://blog.eeymoo.com");
const $$FrontMatter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FrontMatter;
  const { data } = Astro2.props;
  {
    return null;
  }
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/FrontMatter.astro", void 0);

const $$Astro$1 = createAstro("https://blog.eeymoo.com");
const $$PostNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostNavigation;
  const { currentPost } = Astro2.props;
  const posts = await getCollection("blog");
  const allPosts = filterContent(posts || []).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const currentIndex = allPosts.findIndex((post) => post.id === currentPost.id);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const isPrevOnly = !!(prevPost && !nextPost);
  const isNextOnly = !!(nextPost && !prevPost);
  return renderTemplate`${maybeRenderHead()}<nav class="post-navigation mt-12 pt-8"> <div class="flex justify-between items-center"> <!-- 上一篇 --> ${prevPost && renderTemplate`<div${addAttribute(isPrevOnly ? "prev-post mx-auto text-center max-w-md" : "prev-post text-left max-w-md", "class")}> <a${addAttribute(getPostUrl(prevPost), "href")} class="no-style group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-0 shadow-none focus:outline-none focus:ring-0"> <div class="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center"> <svg${addAttribute(isPrevOnly ? "w-4 h-4 mr-1 rotate-180" : "w-4 h-4 mr-1", "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
上一篇
</div> <h3 class="text-base font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2"> ${prevPost.data.title} </h3> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1"> ${prevPost.data.date.toLocaleDateString("zh-CN")} </div> </a> </div>`} <!-- 下一篇 --> ${nextPost && renderTemplate`<div${addAttribute(isNextOnly ? "next-post mx-auto text-center max-w-md" : "next-post text-right max-w-md ml-auto", "class")}> <a${addAttribute(getPostUrl(nextPost), "href")} class="no-style group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-0 shadow-none focus:outline-none focus:ring-0"> <div class="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center justify-end">
下一篇
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> <h3 class="text-base font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2"> ${nextPost.data.title} </h3> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1"> ${nextPost.data.date.toLocaleDateString("zh-CN")} </div> </a> </div>`} </div> </nav> <!-- Styling removed in favor of Tailwind CSS utility classes -->`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/PostNavigation.astro", void 0);

const $$Astro = createAstro("https://blog.eeymoo.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    title,
    date,
    updated,
    heroImage,
    tags,
    categories,
    description,
    speculationUrls = ["/", "/post", "/categories", "/tags", "/archives"],
    speculationEagerness = "lazy"
  } = Astro2.props;
  const finalDescription = description || "";
  const breadcrumbs = [
    { name: "\u9996\u9875", url: "/" },
    { name: "\u535A\u5BA2", url: "/post/" },
    { name: title, url: Astro2.url.pathname }
  ];
  const structuredDataProps = {
    title,
    description: finalDescription,
    image: heroImage?.src,
    datePublished: date instanceof Date ? date.toISOString() : new Date(date).toISOString(),
    dateModified: updated ? updated instanceof Date ? updated.toISOString() : new Date(updated).toISOString() : date instanceof Date ? date.toISOString() : new Date(date).toISOString(),
    url: Astro2.url.href,
    keywords: tags || [],
    author: {
      name: "Eeymoo",
      url: "https://blog.eeymoo.com"
    },
    publisher: {
      name: "Eeymoo's Blog",
      logo: "https://blog.eeymoo.com/logo.svg"
    },
    articleSection: categories,
    inLanguage: "zh-CN",
    blogUrl: "https://blog.eeymoo.com/",
    blogName: "Eeymoo's Blog"
  };
  return renderTemplate`<html lang="zh-CN" class="scroll-smooth"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": finalDescription, "image": heroImage, "keywords": tags, "publishedTime": date instanceof Date ? date.toISOString() : new Date(date).toISOString(), "modifiedTime": updated ? updated instanceof Date ? updated.toISOString() : new Date(updated).toISOString() : void 0, "articleSection": categories, "speculationUrls": speculationUrls, "speculationEagerness": speculationEagerness })}${renderComponent($$result, "StructuredData", $$StructuredData, { "type": "BlogPosting", "data": structuredDataProps })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "sticky": false })} <main class="w-full max-w-285 mx-auto px-4 py-12"> <!-- 面包屑导航 --> ${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "items": breadcrumbs })} <article> <div class="hero-image w-full"> ${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImage, "alt": "", "class": "block mx-auto rounded-xl" })}`} </div> <div class="prose w-full max-w-200 mx-auto px-4 text-slate-700 dark:text-slate-300"> <div class="title mb-4 py-4 text-center leading-tight"> <h1 class="mb-2 text-lg font-bold">${title}</h1> <div class="flex mb-2"> ${renderComponent($$result, "PostDate", $$PostDate, { "date": new Date(date), "updated": updated ? new Date(updated) : void 0 })} ${renderComponent($$result, "Categories", $$Categories, { "categories": categories, "link": true })} </div> ${renderComponent($$result, "Tags", $$Tags, { "tags": tags, "link": true })} ${tags?.includes("AICG") && renderTemplate`<div class="mt-3"> ${renderComponent($$result, "Tips", $$Tips, { "type": "warning" }, { "default": ($$result2) => renderTemplate`
本文含有 AI 生成的内容，仅供参考，请自行甄别
` })} </div>`} </div> ${renderComponent($$result, "FrontMatter", $$FrontMatter, { "data": Astro2.props })} <!-- 文章内容 --> <div class="prose w-full max-w-200 mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </div> </article> <!-- 上一篇下一篇导航 --> ${renderComponent($$result, "PostNavigation", $$PostNavigation, { "currentPost": {
    id: Astro2.props.originalId || Astro2.url.pathname,
    collection: "blog",
    data: Astro2.props
  } })} <!-- 评论区 --> ${renderComponent($$result, "Comments", $$Comments, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
