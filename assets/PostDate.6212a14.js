import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, g as renderSlot, a as renderTemplate } from './astro/server.6212a14.js';
import 'piccolore';
import { $ as $$FormattedDate } from './FormattedDate.6212a14.js';
import dayjs from 'dayjs';

const $$Astro = createAstro("https://blog.eeymoo.com");
const $$PostDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostDate;
  const { date, updated, class: className } = Astro2.props;
  return renderTemplate`${date && renderTemplate`${maybeRenderHead()}<p${addAttribute([
    "no-style flex items-center h-7 py-0.5 text-gray-400 dark:text-gray-500 text-sm gap-1",
    className
  ], "class:list")}>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": date })}${updated && !dayjs(date).isSame(dayjs(updated), "day") && renderTemplate`<span class="ml-2">
Last updated on
${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updated })}</span>`}${renderSlot($$result, $$slots["default"])}</p>`}`;
}, "/home/runner/work/obsidian2astro-template/obsidian2astro-template/src/components/PostDate.astro", void 0);

export { $$PostDate as $ };
