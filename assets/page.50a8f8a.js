const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core.50a8f8a.js","assets/preload-helper.50a8f8a.js"])))=>i.map(i=>d[i]);
import{_ as g}from"./preload-helper.50a8f8a.js";const c=()=>document.querySelectorAll("pre.mermaid").length>0;let d=null;async function h(){return d||(console.log("[astro-mermaid] Loading mermaid.js..."),d=g(()=>import("./mermaid.core.50a8f8a.js").then(r=>r.bE),__vite__mapDeps([0,1])).then(async({default:r})=>{const t=[];if(t&&t.length>0){console.log("[astro-mermaid] Registering",t.length,"icon packs");const a=t.map(e=>({name:e.name,loader:new Function("return "+e.loader)()}));await r.registerIconPacks(a)}return r}).catch(r=>{throw console.error("[astro-mermaid] Failed to load mermaid:",r),d=null,r}),d)}const m={startOnLoad:!1,theme:"default"},b={light:"default",dark:"dark"};async function s(){console.log("[astro-mermaid] Initializing mermaid diagrams...");const r=document.querySelectorAll("pre.mermaid");if(console.log("[astro-mermaid] Found",r.length,"mermaid diagrams"),r.length===0)return;const t=await h();let a=m.theme;{const e=document.documentElement.getAttribute("data-theme"),n=document.body.getAttribute("data-theme");a=b[e||n]||m.theme,console.log("[astro-mermaid] Using theme:",a,"from",e?"html":"body")}t.initialize({...m,theme:a,gitGraph:{mainBranchName:"main",showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(const e of r){if(e.hasAttribute("data-processed"))continue;e.hasAttribute("data-diagram")||e.setAttribute("data-diagram",e.textContent||"");const n=e.getAttribute("data-diagram")||"",o="mermaid-"+Math.random().toString(36).slice(2,11);console.log("[astro-mermaid] Rendering diagram:",o);try{const i=document.getElementById(o);i&&i.remove();const{svg:u}=await t.render(o,n);e.innerHTML=u,e.setAttribute("data-processed","true"),console.log("[astro-mermaid] Successfully rendered diagram:",o)}catch(i){console.error("[astro-mermaid] Mermaid rendering error for diagram:",o,i),e.innerHTML=`<div style="color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;">
        <strong>Error rendering diagram:</strong><br/>
        ${i.message||"Unknown error"}
      </div>`,e.setAttribute("data-processed","true")}}}c()?(console.log("[astro-mermaid] Mermaid diagrams detected on initial load"),s()):console.log("[astro-mermaid] No mermaid diagrams found on initial load");{const r=new MutationObserver(t=>{for(const a of t)a.type==="attributes"&&a.attributeName==="data-theme"&&(document.querySelectorAll("pre.mermaid[data-processed]").forEach(e=>{e.removeAttribute("data-processed")}),s())});r.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),r.observe(document.body,{attributes:!0,attributeFilter:["data-theme"]})}document.addEventListener("astro:after-swap",()=>{console.log("[astro-mermaid] View transition detected"),c()&&s()});const l=document.createElement("style");l.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `;document.head.appendChild(l);
