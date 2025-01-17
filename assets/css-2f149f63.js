import{d as o,o as a,c as e,f as c,g as l,w as u,b as i,h as k,i as r}from"./index-9362ae99.js";const d={class:"markdown-body"},g=o({__name:"css规范",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(t,n)=>(a(),e("div",d,n[0]||(n[0]=[c(`<h1 id="css%E8%A7%84%E8%8C%83" tabindex="-1">css规范</h1><h2 id="%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83" tabindex="-1">命名规范</h2><ul><li>类名使用小写字母，以中划线分隔</li></ul><pre class="language-css"><code class="language-css"><span class="token comment">/* class */</span>
<span class="token selector">.element-content</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><p>关于 vscode 默认双击无法选中中划线拼接名称的问题，可以通过更改配置解决</p><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>
  <span class="token comment">// 默认为 &quot;\`~!@#$%^&amp;*()-=+[{]}\\\\|;:&#39;\\&quot;,.&lt;&gt;/?&quot; 去除&#39;-&#39;</span>
  <span class="token property">&quot;editor.wordSeparators&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\`~!@#$%^&amp;*()=+[{]}\\\\|;:&#39;\\&quot;,.&lt;&gt;/?&quot;</span>
<span class="token punctuation">}</span>
</code></pre><ul><li>id采用驼峰式命名</li></ul><pre class="language-css"><code class="language-css"><span class="token comment">/* id */</span>
<span class="token selector">#myDialog</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><h2 id="id%E5%92%8C-class-%E5%91%BD%E5%90%8D" tabindex="-1">ID和 Class 命名</h2><p>使用有含义的 id 和 class 名称。</p><pre class="language-css"><code class="language-css"><span class="token comment">/* 正确: 有特殊性 */</span>
<span class="token selector">#gallery</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">#login</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.video</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 正确: 通用 */</span>
<span class="token selector">.aux</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.alt</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 错误：无意义 */</span>
<span class="token selector">#yee-1901</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 错误：不够特殊 */</span>
<span class="token selector">.button-green</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.clear</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><p>id 和 class 应该尽量简短，同时要容易理解。</p><pre class="language-css"><code class="language-css"><span class="token comment">/* 正确 */</span>
<span class="token selector">#nav</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.author</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 错误 */</span>
<span class="token selector">#navigation</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.atr</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="%E5%B1%9E%E6%80%A7%E7%AE%80%E5%86%99" tabindex="-1">属性简写</h2><p>尽量使用 CSS 中可以简写的属性 (如 font)，可以提高编码效率以及代码可读性。</p><pre class="language-css"><code class="language-css"><span class="token comment">/* 正确 */</span>
<span class="token property">border-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">font</span><span class="token punctuation">:</span>
  100%/1.6 palatino<span class="token punctuation">,</span>
  georgia<span class="token punctuation">,</span>
  serif<span class="token punctuation">;</span>
<span class="token property">padding</span><span class="token punctuation">:</span> 0 1em 2em<span class="token punctuation">;</span>

<span class="token comment">/* 错误 */</span>
<span class="token property">border-top-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> palatino<span class="token punctuation">,</span> georgia<span class="token punctuation">,</span> serif<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span>
<span class="token property">padding-bottom</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token property">padding-left</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token property">padding-right</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre><h2 id="0-%E5%92%8C%E5%8D%95%E4%BD%8D" tabindex="-1">0 和单位</h2><p>值为 0 时不用添加单位。</p><pre class="language-css"><code class="language-css"><span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre><h2 id="%E5%BC%80%E5%A4%B4%E7%9A%84-0" tabindex="-1">开头的 0</h2><p>值在 -1 和 1 之间时，不需要加 0。</p><pre class="language-css"><code class="language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
</code></pre><h2 id="16%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95" tabindex="-1">16进制表示法</h2><pre class="language-css"><code class="language-css"><span class="token comment">/* 正确 */</span>
<span class="token property">color</span><span class="token punctuation">:</span> #ebc<span class="token punctuation">;</span>

<span class="token comment">/* 错误 */</span>
<span class="token property">color</span><span class="token punctuation">:</span> #eebbcc<span class="token punctuation">;</span>
</code></pre><h2 id="%E5%89%8D%E7%BC%80" tabindex="-1">前缀</h2><p>使用带前缀的命名空间可以防止命名冲突，同时提高代码可维护性。</p><pre class="language-css"><code class="language-css"><span class="token selector">.adw-help</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">/* AdWords */</span>
<span class="token selector">#maia-note</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">/* Maia */</span>
</code></pre><h2 id="%E9%80%89%E6%8B%A9%E5%99%A8%E5%88%86%E9%9A%94" tabindex="-1">选择器分隔</h2><p>每个选择器都另起一行。</p><pre class="language-css"><code class="language-css"><span class="token comment">/* 正确 */</span>
<span class="token selector">h1,
h2,
h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 错误 */</span>
<span class="token selector">a:focus,
a:active</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="%E8%A7%84%E5%88%99%E5%88%86%E9%9A%94" tabindex="-1">规则分隔</h2><p>规则之间都用空行隔开。</p><pre class="language-css"><code class="language-css"><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="%E5%88%86%E6%AE%B5%E6%B3%A8%E9%87%8A" tabindex="-1">分段注释</h2><p>用注释把 CSS 分成各个部分。</p><pre class="language-css"><code class="language-css"><span class="token comment">/* Header */</span>

<span class="token selector">#adw-header</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Footer */</span>

<span class="token selector">#adw-footer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Gallery */</span>

<span class="token selector">.adw-gallery</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre>`,36)])))}}),E={__name:"css",setup(p){return(s,t)=>{const n=r;return a(),l(n,null,{default:u(()=>[i(k(g),{id:"markdown"})]),_:1})}}};export{E as default};
