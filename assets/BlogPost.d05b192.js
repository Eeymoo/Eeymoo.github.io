import { e as createAstro, c as createComponent, d as addAttribute, m as maybeRenderHead, a as renderTemplate, r as renderComponent, b as renderHead, f as renderScript, F as Fragment, u as unescapeHTML } from './astro/server.d05b192.js';
import 'piccolore';
import { $ as $$Image } from './_astro_assets.d05b192.js';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Header.d05b192.js';
import { $ as $$PostDate } from './PostDate.d05b192.js';
import { $ as $$Categories, a as $$Tags } from './Categories.d05b1922.js';
import 'clsx';
import { $ as $$Tips } from './Tips.d05b192.js';
import { $ as $$StructuredData } from './StructuredData.d05b192.js';
import { $ as $$Breadcrumb } from './Breadcrumb.d05b192.js';
import { m as markmapToggleCssUrl } from './about-2.d05b192.js';
import { f as filterContent, g as getCollection } from './_astro_content.d05b192.js';
import { g as getPostUrl } from './urls.d05b192.js';
import { $ as $$Comments } from './Comments.d05b192.js';

const $$Astro$3 = createAstro("https://blog.eeymoo.com");
const $$FrontMatter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FrontMatter;
  const { data } = Astro2.props;
  {
    return null;
  }
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/FrontMatter.astro", void 0);

const $$Astro$2 = createAstro("https://blog.eeymoo.com");
const $$MarkdownViewToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MarkdownViewToggle;
  const { postId, hasHeadings = false } = Astro2.props;
  return renderTemplate`${hasHeadings && renderTemplate`<link rel="stylesheet"${addAttribute(markmapToggleCssUrl, "href")}>

${maybeRenderHead()}<div class="markdown-view-toggle"${addAttribute(postId, "data-post-id")}><div class="toggle-container"><button type="button" class="toggle-btn" data-view="md" title="Markdown 视图" aria-label="切换到 Markdown 视图"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="toggle-icon"><path d="M593.8 59.1l-547.6 0C20.7 59.1 0 79.8 0 105.2L0 406.7c0 25.5 20.7 46.2 46.2 46.2l547.7 0c25.5 0 46.2-20.7 46.1-46.1l0-301.6c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6l-61.5 0 0-120-61.5 76.9-61.5-76.9 0 120-61.7 0 0-209.2 61.5 0 61.5 76.9 61.5-76.9 61.5 0 0 209.2 .2 0zm135.3 3.1l-92.3-107.7 61.5 0 0-104.6 61.5 0 0 104.6 61.5 0-92.2 107.7z"></path></svg></button><button type="button" class="toggle-btn" data-view="markmap" title="思维导图视图" aria-label="切换到思维导图视图"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="toggle-icon"><path d="M192 64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-8 0 0 64 120 0c39.8 0 72 32.2 72 72l0 56 8 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l8 0 0-56c0-13.3-10.7-24-24l0 56 8 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l8 0 0-64-120 0c-13.3 0-24 10.7-24 24l0 56 8 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l8 0 0-64z"></path></svg></button></div></div>`}`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/MarkdownViewToggle.astro", void 0);

const $$Astro$1 = createAstro("https://blog.eeymoo.com");
const $$PostNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostNavigation;
  const { currentPost } = Astro2.props;
  const allPosts = filterContent(await getCollection("blog")).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
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
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
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
  const slotContent = await Astro2.slots.render("default");
  const hasHeadings = /<h[2-6][^>]*>/.test(slotContent);
  return renderTemplate`<html lang="zh-CN" class="scroll-smooth"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": finalDescription, "image": heroImage, "keywords": tags, "publishedTime": date instanceof Date ? date.toISOString() : new Date(date).toISOString(), "modifiedTime": updated ? updated instanceof Date ? updated.toISOString() : new Date(updated).toISOString() : void 0, "articleSection": categories, "speculationUrls": speculationUrls, "speculationEagerness": speculationEagerness })}${renderComponent($$result, "StructuredData", $$StructuredData, { "type": "BlogPosting", "data": structuredDataProps })}${renderHead()}</head> <body class="min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, { "sticky": false })} <main class="flex-1 w-full max-w-285 mx-auto px-4 py-12"> <!-- 面包屑导航 --> ${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "items": breadcrumbs })} <article class="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-4"> <div class="hero-image w-full"> ${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImage, "alt": "", "class": "block mx-auto rounded-xl" })}`} </div> <div class="prose w-full max-w-200 mx-auto px-4 text-slate-700 dark:text-slate-300"> <div class="title mb-4 py-4 text-center leading-tight"> <h1 class="mb-2 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">${title}</h1> <div class="flex mb-2"> ${renderComponent($$result, "PostDate", $$PostDate, { "date": new Date(date), "updated": updated ? new Date(updated) : void 0 })} ${renderComponent($$result, "Categories", $$Categories, { "categories": categories, "link": true })} </div> ${renderComponent($$result, "Tags", $$Tags, { "tags": tags, "link": true })} ${tags?.includes("AICG") && renderTemplate`<div class="mt-3"> ${renderComponent($$result, "Tips", $$Tips, { "type": "warning" }, { "default": async ($$result2) => renderTemplate`
本文含有 AI 生成的内容，仅供参考，请自行甄别
` })} </div>`} </div> ${renderComponent($$result, "FrontMatter", $$FrontMatter, { "data": Astro2.props })} <!-- 视图切换按钮 --> ${renderComponent($$result, "MarkdownViewToggle", $$MarkdownViewToggle, { "postId": Astro2.props.originalId || Astro2.url.pathname, "hasHeadings": hasHeadings })} <!-- 文章内容容器 --> <div class="article-content-wrapper"> <div class="article-content"> <div class="prose w-full max-w-200 mx-auto"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(slotContent)}` })} </div> </div> </div> </div> </article> <!-- 上一篇下一篇导航 --> ${renderComponent($$result, "PostNavigation", $$PostNavigation, { "currentPost": {
    id: Astro2.props.originalId || Astro2.url.pathname,
    collection: "blog",
    data: Astro2.props
  } })} <!-- 评论区 --> ${renderComponent($$result, "Comments", $$Comments, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} <!-- Markdown 视图切换脚本 --> ${renderScript($$result, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/layouts/BlogPost.astro?astro&type=script&index=0&lang.ts")} <!-- ZoomImage 客户端脚本 --> ${renderScript($$result, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/layouts/BlogPost.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
