import{d as o,o as a,c as e,g as c,h as l,w as u,a as r,i as k,j as i}from"./index-d51d3235.js";const g={class:"markdown-body"},y=c(`<blockquote><p>/plugins/injectFiles.ts</p></blockquote><pre class="language-js"><code class="language-js"><span class="token comment">/*
 * @Author: chengchunlin
 * @Date: 2024-03-22 13:23:26
 * @LastEditors: chengchunlin
 * @LastEditTime: 2024-03-22 13:41:18
 * @Description: 导入API、config、tools、handles文件
 *
 * Copyright (c) 2024 by 程春霖, All Rights Reserved.
 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> existsSync<span class="token punctuation">,</span> readdirSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:fs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath<span class="token punctuation">,</span> <span class="token constant">URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:url&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">res</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$tools</span><span class="token operator">:</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;../src/utils/tools.ts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$handles</span><span class="token operator">:</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;../src/utils/handles.ts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dirList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">&#39;src/api&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">reg</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.*)\\.service\\.(js|ts)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>
      <span class="token function">keyGenerator</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fileName</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">Api</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">&#39;src/config&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">reg</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.*)\\.config\\.(js|ts)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>
      <span class="token function">keyGenerator</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fileName</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">Config</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  dirList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> baseUrl<span class="token punctuation">,</span> reg<span class="token punctuation">,</span> keyGenerator <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">existsSync</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">readdirSync</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          res<span class="token punctuation">[</span><span class="token function">keyGenerator</span><span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">../</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>baseUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><pre class="language-js"><code class="language-js"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue-jsx&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> babel <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-babel&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> inject <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-inject&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> basicSSL <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-basic-ssl&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> viteImagemin <span class="token keyword">from</span> <span class="token string">&quot;@vheemstra/vite-plugin-imagemin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> imageminPngquant <span class="token keyword">from</span> <span class="token string">&quot;imagemin-pngquant&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> svgo <span class="token keyword">from</span> <span class="token string">&quot;imagemin-svgo&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compression <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-compression2&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath<span class="token punctuation">,</span> <span class="token constant">URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;node:url&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> injectFiles <span class="token keyword">from</span> <span class="token string">&quot;./plugins/injectFiles&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 根据环境变量设置根目录</span>
<span class="token keyword">const</span> baseUrlPath <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> baseUrlPath<span class="token punctuation">,</span>
  <span class="token comment">// 打包时删除debugger、console.log</span>
  <span class="token literal-property property">esbuild</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">drop</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;debugger&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pure</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;console.log&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 支持jsx语法</span>
    <span class="token function">compression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 打包压缩为.gz</span>
    <span class="token function">basicSSL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 生成一个不受信任的证书</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 自动导入\`./src/components/\`目录下的组件vue组件</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue\\?vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">babelConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">babelrc</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">configFile</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">compact</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">[</span>
            <span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">decoratorsBeforeExport</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&quot;2023-05&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">viteImagemin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">png</span><span class="token operator">:</span> <span class="token function">imageminPngquant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// png图片压缩</span>
        <span class="token literal-property property">svg</span><span class="token operator">:</span> <span class="token function">svgo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// svg压缩</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">inject</span><span class="token punctuation">(</span><span class="token function">injectFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 导入全局API、config、方法、处理函数</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;./src&quot;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">charset</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &quot;@/assets/var.less&quot;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;local.eastmoney.com&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8083</span><span class="token punctuation">,</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,3),m=[y],d=o({__name:"配置",setup(p,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(t,s)=>(a(),e("div",g,m))}}),w={__name:"index",setup(p){return(n,t)=>{const s=i;return a(),l(s,null,{default:u(()=>[r(k(d),{id:"markdown"})]),_:1})}}};export{w as default};
