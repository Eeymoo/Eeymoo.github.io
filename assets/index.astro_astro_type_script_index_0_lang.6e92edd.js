const w="modulepreload",h=function(e){return"/"+e},m={},z=function(t,n,a){let i=Promise.resolve();if(n&&n.length>0){let s=function(r){return Promise.all(r.map(l=>Promise.resolve(l).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),p=o?.nonce||o?.getAttribute("nonce");i=s(n.map(r=>{if(r=h(r),r in m)return;m[r]=!0;const l=r.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${d}`))return;const y=document.createElement("link");if(y.rel=l?"stylesheet":w,l||(y.as="script"),y.crossOrigin="",y.href=r,p&&y.setAttribute("nonce",p),document.head.appendChild(y),l)return new Promise((B,b)=>{y.addEventListener("load",B),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${r}`)))})}))}function c(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return i.then(s=>{for(const o of s||[])o.status==="rejected"&&c(o.reason);return t().catch(c)})};async function E(e){const t=new TextEncoder().encode(e);if("CompressionStream"in window){const a=new CompressionStream("gzip"),i=new Blob([t]).stream().pipeThrough(a);return(await new Response(i).arrayBuffer()).byteLength}const{gzipSync:n}=await z(async()=>{const{gzipSync:a}=await import("./browser.6e92edd.js");return{gzipSync:a}},[]);return n(t).byteLength}async function k(e){if(!e)return{originalBytes:0,gzipBytes:0,ratio:0,saved:0};const t=new TextEncoder().encode(e).byteLength,n=await E(e),a=t>0?n/t:0,i=1-a;return{originalBytes:t,gzipBytes:n,ratio:a,saved:i}}function x(e){if(e===0)return"0 B";const t=1024,n=["B","KB","MB","GB"],a=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/Math.pow(t,a)).toFixed(2))} ${n[a]}`}function u(e){return`${(e*100).toFixed(2)}%`}function g(e,t,n){const a=document.getElementById(e);if(a){if(n==="loading"){a.innerHTML='<p class="text-gray-500">计算中...</p>';return}if(n==="empty"){a.innerHTML='<p class="text-gray-400">请输入文本</p>';return}if(n==="error"){a.innerHTML='<p class="text-red-500">计算失败</p>';return}a.innerHTML=`
    <div class="space-y-2">
      <div class="flex justify-between">
        <span class="text-gray-600 dark:text-gray-400">原始大小:</span>
        <span class="font-semibold text-gray-900 dark:text-gray-100">${x(t.originalBytes)}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600 dark:text-gray-400">Gzip 后:</span>
        <span class="font-semibold text-gray-900 dark:text-gray-100">${x(t.gzipBytes)}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600 dark:text-gray-400">压缩率:</span>
        <span class="font-semibold text-primary">${u(t.ratio)}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600 dark:text-gray-400">节省:</span>
        <span class="font-semibold text-green-600 dark:text-green-400">${u(t.saved)}</span>
      </div>
    </div>
  `}}function v(e,t){const n=document.getElementById("comparison");if(!n)return;if(e.originalBytes===0&&t.originalBytes===0){n.innerHTML='<p class="text-gray-400 text-center">输入文本后查看对比结果</p>';return}if(e.originalBytes===0||t.originalBytes===0){n.innerHTML='<p class="text-gray-400 text-center">请输入两段文本进行对比</p>';return}const a=e.ratio-t.ratio,i=e.saved-t.saved;let c="",s="";Math.abs(a)<.01?(c="两段文本压缩率相近",s="text-gray-600 dark:text-gray-400"):e.ratio<t.ratio?(c=`文本 A 压缩率更低，比 B 节省 ${u(i)} 空间`,s="text-green-600 dark:text-green-400"):(c=`文本 B 压缩率更低，比 A 节省 ${u(-i)} 空间`,s="text-blue-600 dark:text-blue-400"),n.innerHTML=`
    <div class="text-center space-y-2">
      <p class="${s} font-semibold text-lg">${c}</p>
      <div class="flex justify-center gap-8 text-sm">
        <div>
          <span class="text-gray-600 dark:text-gray-400">A: </span>
          <span class="font-semibold text-gray-900 dark:text-gray-100">${u(e.ratio)}</span>
        </div>
        <div>
          <span class="text-gray-600 dark:text-gray-400">B: </span>
          <span class="font-semibold text-gray-900 dark:text-gray-100">${u(t.ratio)}</span>
        </div>
      </div>
    </div>
  `}function f(){const e=document.getElementById("text-a"),t=document.getElementById("text-b");if(document.getElementById("result-a"),document.getElementById("result-b"),!e||!t){console.warn("Gzip compare: textarea elements not found");return}let n,a={originalBytes:0,gzipBytes:0,ratio:0,saved:0},i={originalBytes:0,gzipBytes:0,ratio:0,saved:0};async function c(p,r,l){if(!p){g(r,{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"empty"),l({originalBytes:0,gzipBytes:0,ratio:0,saved:0});return}g(r,{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"loading");try{const d=await k(p);g(r,d,"success"),l(d)}catch(d){console.error("Gzip calculation error:",d),g(r,{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"error"),l({originalBytes:0,gzipBytes:0,ratio:0,saved:0})}}async function s(){await Promise.all([c(e.value,"result-a",p=>a=p),c(t.value,"result-b",p=>i=p)]),v(a,i)}function o(){n&&clearTimeout(n),n=window.setTimeout(()=>{s()},150)}e.addEventListener("input",o),t.addEventListener("input",o),g("result-a",{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"empty"),g("result-b",{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"empty"),v({originalBytes:0,ratio:0,saved:0},{originalBytes:0,ratio:0,saved:0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f();f();
