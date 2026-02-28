import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, g as renderSlot, a as renderTemplate } from './astro/server.50a8f8a.js';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://blog.eeymoo.com");
const $$Tips = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tips;
  const { type = "info" } = Astro2.props;
  const styleMap = {
    info: "bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/50 dark:border-blue-400 dark:text-blue-300",
    warning: "bg-amber-50 border-amber-500 text-amber-700 dark:bg-amber-900/50 dark:border-amber-400 dark:text-amber-300",
    success: "bg-green-50 border-green-500 text-green-700 dark:bg-green-900/50 dark:border-green-400 dark:text-green-300",
    error: "bg-red-50 border-red-500 text-red-700 dark:bg-red-900/50 dark:border-red-400 dark:text-red-300"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`px-4 py-3 rounded text-sm leading-relaxed ${styleMap[type]}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/Tips.astro", void 0);

export { $$Tips as $ };
