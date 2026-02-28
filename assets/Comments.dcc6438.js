import { e as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, f as renderScript, r as renderComponent } from './astro/server.dcc6438.js';
import 'piccolore';
import { c as config } from './Header.dcc6438.js';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://blog.eeymoo.com");
const $$Giscus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Giscus;
  const { comments } = config;
  const { giscus } = comments;
  if (!giscus) {
    throw new Error("Giscus \u914D\u7F6E\u672A\u5728 config/index.ts \u4E2D\u5B9A\u4E49");
  }
  const {
    repo,
    repoId,
    category,
    categoryId,
    mapping = "pathname",
    strict = "0",
    reactionsEnabled = "1",
    emitMetadata = "0",
    inputPosition = "top",
    theme = "preferred_color_scheme",
    lang = "zh-CN",
    loading = "lazy"
  } = giscus;
  const finalMapping = mapping === "pathname" ? "pathname" : "specific";
  const finalTerm = mapping === "pathname" ? "" : Astro2.props.dataCustomId || Astro2.url.pathname;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<aside id="giscus-container" class="w-full max-w-50rem mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 pt-4 border-t-0" style="display:none"> <script src="https://giscus.app/client.js"', "", "", "", "", "", "", "", "", "", "", "", "", ` crossorigin="anonymous" async>
  <\/script> </aside> <script>
  function initGiscus() {
    const container = document.getElementById('giscus-container');
    let shown = false;
    
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://giscus.app') return;
      if (event.data?.giscus?.discussion && !shown) {
        container.style.display = '';
        shown = true;
      }
    });
    
    const wrappers = document.querySelectorAll('[data-custom-id] div.giscus-wrapper');
    
    wrappers.forEach(wrapper => {
      const customId = wrapper.closest('[data-custom-id]')?.dataset.customId;
      if (!customId) return;
      
      const script = wrapper.querySelector('script[data-repo]');
      if (script) {
        script.dataset.term = customId;
      }
    });
    
    function updateGiscusTheme() {
      const iframes = document.querySelectorAll('.giscus-frame');
      const isDark = document.documentElement.classList.contains('dark');
      
      iframes.forEach(iframe => {
        if (iframe.contentWindow) {
          iframe.contentWindow.postMessage(
            { giscus: { setConfig: { theme: isDark ? 'dark' : 'light' } } },
            'https://giscus.app'
          );
        }
      });
    }
    
    const observer = new MutationObserver(updateGiscusTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGiscus);
  } else {
    initGiscus();
  }
<\/script>`])), maybeRenderHead(), addAttribute(repo, "data-repo"), addAttribute(repoId, "data-repo-id"), addAttribute(category, "data-category"), addAttribute(categoryId, "data-category-id"), addAttribute(finalMapping, "data-mapping"), addAttribute(finalTerm, "data-term"), addAttribute(strict, "data-strict"), addAttribute(reactionsEnabled, "data-reactions-enabled"), addAttribute(emitMetadata, "data-emit-metadata"), addAttribute(inputPosition, "data-input-position"), addAttribute(theme, "data-theme"), addAttribute(lang, "data-lang"), addAttribute(loading, "data-loading"));
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/Giscus.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://blog.eeymoo.com");
const $$Gitalk = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gitalk;
  const { comments } = config;
  const { gitalk } = comments;
  if (!gitalk) {
    throw new Error("Gitalk \u914D\u7F6E\u672A\u5728 config/index.ts \u4E2D\u5B9A\u4E49");
  }
  const {
    clientID,
    clientSecret,
    repo,
    owner,
    admin,
    id,
    distractionFreeMode = false,
    language = "zh-CN",
    proxy
  } = gitalk;
  return renderTemplate(_a || (_a = __template(["", '<div class="w-full max-w-50rem mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"> <div id="gitalk-container"></div> </div> <aside id="gitalk-config"', "", "", "", "", "", "", "", "", ' class="hidden"></aside> ', ` <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1.8.0/dist/gitalk.css"> <script>
  function initGitalk() {
    const config = document.getElementById('gitalk-config');
    const gitalk = new Gitalk({
      clientID: config.dataset.clientId,
      clientSecret: config.dataset.clientSecret,
      repo: config.dataset.repo,
      owner: config.dataset.owner,
      admin: JSON.parse(config.dataset.admin),
      id: config.dataset.id,
      distractionFreeMode: config.dataset.distractionFreeMode === 'true',
      language: config.dataset.language,
      proxy: config.dataset.proxy,
    });

    gitalk.render('gitalk-container');

    function updateGitalkTheme() {
      const isDark = document.documentElement.classList.contains('dark');
      const gtCommentContainer = document.querySelector('.gt-container');
      if (gtCommentContainer) {
        gtCommentContainer.dataset.colorMode = isDark ? 'dark' : 'light';
      }
    }

    const observer = new MutationObserver(updateGitalkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    updateGitalkTheme();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGitalk);
  } else {
    initGitalk();
  }
<\/script>`])), maybeRenderHead(), addAttribute(clientID, "data-client-id"), addAttribute(clientSecret, "data-client-secret"), addAttribute(repo, "data-repo"), addAttribute(owner, "data-owner"), addAttribute(JSON.stringify(admin), "data-admin"), addAttribute(id || Astro2.url.pathname, "data-id"), addAttribute(String(distractionFreeMode), "data-distraction-free-mode"), addAttribute(language, "data-language"), addAttribute(proxy || "", "data-proxy"), renderScript($$result, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/Gitalk.astro?astro&type=script&index=0&lang.ts"));
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/Gitalk.astro", void 0);

const $$Astro = createAstro("https://blog.eeymoo.com");
const $$Comments = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Comments;
  const { comments } = config;
  const { system } = comments;
  const dataCustomId = Astro2.props.dataCustomId || Astro2.url.pathname;
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<div${addAttribute(dataCustomId, "data-custom-id")}>${renderComponent($$result, "Giscus", $$Giscus, { "dataCustomId": dataCustomId })}</div>`}${system === "gitalk"}`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/Comments.astro", void 0);

export { $$Comments as $ };
