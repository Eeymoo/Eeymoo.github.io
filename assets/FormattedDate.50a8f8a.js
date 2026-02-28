import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server.50a8f8a.js';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://blog.eeymoo.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time class="no-style no-underline"${addAttribute(date?.toISOString(), "datetime")}> ${date?.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  })} </time>`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
