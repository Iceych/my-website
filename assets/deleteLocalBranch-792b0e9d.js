import{d as o,o as n,c as p,g as c,h as l,w as r,a as i,i as k,j as u}from"./index-2d0c9e3f.js";const m={class:"markdown-body"},b=c(`<pre class="language-shell"><code class="language-shell"><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 获取所有本地的且已合并到当前分支的分支名（排除release分支和当前分支，建议在master或release分支执行）</span>
<span class="token assign-left variable">branches</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> branch <span class="token parameter variable">--merged</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;\\*&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;release&quot;</span><span class="token variable">\`</span></span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$branches</span><span class="token punctuation">;</span> <span class="token comment"># 打印获取到的分支列表</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">branch</span> <span class="token keyword">in</span> <span class="token variable">$branches</span>
<span class="token keyword">do</span>
<span class="token assign-left variable">res</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> branch <span class="token parameter variable">-d</span> $branch<span class="token variable">\`</span></span><span class="token punctuation">;</span> <span class="token comment"># 删除分支</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$res</span> <span class="token comment"># 打印删除结果</span>
<span class="token keyword">done</span><span class="token punctuation">;</span>
</code></pre>`,1),_=[b],d=o({__name:"删除本地冗余分支脚本",setup(e,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(t,s)=>(n(),p("div",m,_))}}),v={__name:"deleteLocalBranch",setup(e){return(a,t)=>{const s=u;return n(),l(s,null,{default:r(()=>[i(k(d),{id:"markdown"})]),_:1})}}};export{v as default};