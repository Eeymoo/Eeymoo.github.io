import{_ as m}from"./preload-helper.503cef6.js";async function B(t){const e=new TextEncoder().encode(t);if("CompressionStream"in window){const a=new CompressionStream("gzip"),i=new Blob([e]).stream().pipeThrough(a);return(await new Response(i).arrayBuffer()).byteLength}const{gzipSync:n}=await m(async()=>{const{gzipSync:a}=await import("./browser.503cef6.js");return{gzipSync:a}},[]);return n(e).byteLength}async function v(t){if(!t)return{originalBytes:0,gzipBytes:0,ratio:0,saved:0};const e=new TextEncoder().encode(t).byteLength,n=await B(t),a=e>0?n/e:0,i=1-a;return{originalBytes:e,gzipBytes:n,ratio:a,saved:i}}function x(t){if(t===0)return"0 B";const e=1024,n=["B","KB","MB","GB"],a=Math.floor(Math.log(t)/Math.log(e));return`${parseFloat((t/Math.pow(e,a)).toFixed(2))} ${n[a]}`}function d(t){return`${(t*100).toFixed(2)}%`}function c(t,e,n){const a=document.getElementById(t);if(a){if(n==="loading"){a.innerHTML='<p class="text-gray-500">计算中...</p>';return}if(n==="empty"){a.innerHTML='<p class="text-gray-400">请输入文本</p>';return}if(n==="error"){a.innerHTML='<p class="text-red-500">计算失败</p>';return}a.innerHTML=`
    <div class="space-y-2">
      <div class="flex justify-between">
        <span class="text-gray-600 dark:text-gray-400">原始大小:</span>
        <span class="font-semibold text-gray-900 dark:text-gray-100">${x(e.originalBytes)}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600 dark:text-gray-400">Gzip 后:</span>
        <span class="font-semibold text-gray-900 dark:text-gray-100">${x(e.gzipBytes)}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600 dark:text-gray-400">压缩率:</span>
        <span class="font-semibold text-primary">${d(e.ratio)}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600 dark:text-gray-400">节省:</span>
        <span class="font-semibold text-green-600 dark:text-green-400">${d(e.saved)}</span>
      </div>
    </div>
  `}}function u(t,e){const n=document.getElementById("comparison");if(!n)return;if(t.originalBytes===0&&e.originalBytes===0){n.innerHTML='<p class="text-gray-400 text-center">输入文本后查看对比结果</p>';return}if(t.originalBytes===0||e.originalBytes===0){n.innerHTML='<p class="text-gray-400 text-center">请输入两段文本进行对比</p>';return}const a=t.ratio-e.ratio,i=t.saved-e.saved;let s="",r="";Math.abs(a)<.01?(s="两段文本压缩率相近",r="text-gray-600 dark:text-gray-400"):t.ratio<e.ratio?(s=`文本 A 压缩率更低，比 B 节省 ${d(i)} 空间`,r="text-green-600 dark:text-green-400"):(s=`文本 B 压缩率更低，比 A 节省 ${d(-i)} 空间`,r="text-blue-600 dark:text-blue-400"),n.innerHTML=`
    <div class="text-center space-y-2">
      <p class="${r} font-semibold text-lg">${s}</p>
      <div class="flex justify-center gap-8 text-sm">
        <div>
          <span class="text-gray-600 dark:text-gray-400">A: </span>
          <span class="font-semibold text-gray-900 dark:text-gray-100">${d(t.ratio)}</span>
        </div>
        <div>
          <span class="text-gray-600 dark:text-gray-400">B: </span>
          <span class="font-semibold text-gray-900 dark:text-gray-100">${d(e.ratio)}</span>
        </div>
      </div>
    </div>
  `}function g(){const t=document.getElementById("text-a"),e=document.getElementById("text-b");if(document.getElementById("result-a"),document.getElementById("result-b"),!t||!e){console.warn("Gzip compare: textarea elements not found");return}let n,a={originalBytes:0,gzipBytes:0,ratio:0,saved:0},i={originalBytes:0,gzipBytes:0,ratio:0,saved:0};async function s(o,y,l){if(!o){c(y,{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"empty"),l({originalBytes:0,gzipBytes:0,ratio:0,saved:0});return}c(y,{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"loading");try{const p=await v(o);c(y,p,"success"),l(p)}catch(p){console.error("Gzip calculation error:",p),c(y,{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"error"),l({originalBytes:0,gzipBytes:0,ratio:0,saved:0})}}async function r(){await Promise.all([s(t.value,"result-a",o=>a=o),s(e.value,"result-b",o=>i=o)]),u(a,i)}function f(){n&&clearTimeout(n),n=window.setTimeout(()=>{r()},150)}t.addEventListener("input",f),e.addEventListener("input",f),c("result-a",{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"empty"),c("result-b",{originalBytes:0,gzipBytes:0,ratio:0,saved:0},"empty"),u({originalBytes:0,ratio:0,saved:0},{originalBytes:0,ratio:0,saved:0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g();g();
