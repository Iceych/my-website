import{d as o,o as a,c as e,f as c,g as l,w as u,b as k,h as i,i as r}from"./index-9362ae99.js";const d={class:"markdown-body"},m=o({__name:"js规范",setup(t,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,n)=>(a(),e("div",d,n[0]||(n[0]=[c(`<h1 id="js%E8%A7%84%E8%8C%83" tabindex="-1">js规范</h1><h2 id="%E5%B8%B8%E8%A7%81%E5%8F%98%E9%87%8F%E5%91%BD%E5%90%8D%E6%B3%95" tabindex="-1">常见变量命名法</h2><ul><li>骆驼(<code class="">camelCase</code>)命名法 骆驼式命名法，正如它的名称所表示的那样，是指混合使用大小写字母来构成变量和函数的名字。增加程序可读性。</li><li>帕斯卡(<code class="">PascalCase</code>)命名法 与骆驼命名法类似，只不过骆驼命名法是首字母小写，而帕斯卡命名法是首字母大写。</li></ul><h2 id="%E5%91%BD%E5%90%8D%E6%A0%BC%E5%BC%8F" tabindex="-1">命名格式</h2><h3 id="%E5%8F%98%E9%87%8F" tabindex="-1">变量</h3><p>变量必须采用<code class="">camelCase</code>命名。</p><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">let</span> autoPlay <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> frameIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">let</span> AutoPlay <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> frameindex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><h3 id="%E5%B8%B8%E9%87%8F" tabindex="-1">常量</h3><p>常量命名应该使用全大写格式，并用下划线分割</p><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">const</span> <span class="token constant">NUMBER</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><h3 id="%E5%87%BD%E6%95%B0" tabindex="-1">函数</h3><p>函数的参数使用<code class="">动宾结构</code>+<code class="">camelCase</code>命名法，参数使用<code class="">camelCase</code></p><pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">myData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><h3 id="%E7%B1%BB" tabindex="-1">类</h3><p>类使用<code class="">PascalCase</code>，类的方法和属性的命名使用 <code class="">camelCase</code></p><pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Engine</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token function">doSomeThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99" tabindex="-1">命名规则</h2><h3 id="%E5%89%8D%E7%BC%80" tabindex="-1">前缀</h3><p>前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)</p><h3 id="%E5%B8%B8%E7%94%A8%E8%AF%AD%E4%B9%89%E5%89%8D%E7%BC%80" tabindex="-1">常用语义前缀</h3><table><thead><tr><th>动词</th><th>含义</th><th>返回值</th></tr></thead><tbody><tr><td>can</td><td>判断是否可执行某个动作(权限)</td><td>函数返回一个布尔值。true：可执行；false：不可执行</td></tr><tr><td>has</td><td>判断是否含有某个值</td><td>函数返回一个布尔值。true：含有此值；false：不含有此值</td></tr><tr><td>is</td><td>判断是否为某个值</td><td>函数返回一个布尔值。true：为某个值；false：不为某个值</td></tr><tr><td>get</td><td>获取某个值</td><td>函数返回一个非布尔值</td></tr><tr><td>set</td><td>设置某个值</td><td>无返回值、返回是否设置成功或者返回链式对象</td></tr><tr><td>load</td><td>加载某些数据</td><td>无返回值或者返回是否加载完成的结果</td></tr><tr><td>init</td><td>初始化</td><td>无返回值或者返回初始化的结果</td></tr><tr><td>handle</td><td>事件处理</td><td>无返回值或者返回事件处理的结果</td></tr></tbody></table><pre class="language-js"><code class="language-js"><span class="token comment">// 加载数据</span>
<span class="token keyword">function</span> <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 获取名称</span>
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E4%BD%93%E7%8E%B0%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B" tabindex="-1">体现变量类型</h3><p>尽量在变量名字中体现所属类型，如:<code class="">length</code>、<code class="">count</code>等表示数字类型；而包含<code class="">name</code>、<code class="">title</code>表示为字符串类型。</p><h3 id="%E5%B8%83%E5%B0%94%E5%80%BC%E5%8F%98%E9%87%8F" tabindex="-1">布尔值变量</h3><p><code class="">boolean</code> 类型的变量使用 <code class="">is</code> 或 <code class="">has</code> 开头</p><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> isReady <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> hasMoreCommands <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><h2 id="%E5%8F%98%E9%87%8F-1" tabindex="-1">变量</h2><h3 id="%E6%9D%9C%E7%BB%9Dvar" tabindex="-1">杜绝var</h3><p>使用const或let来声明所有局部变量。如果变量不需要被重新赋值，默认应该使用const。应该拒绝使用关键字var。</p><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">const</span> example <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">var</span> example <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E6%AF%8F%E6%AC%A1%E5%8F%AA%E5%A3%B0%E6%98%8E%E4%B8%80%E4%B8%AA%E5%8F%98%E9%87%8F" tabindex="-1">每次只声明一个变量</h3><p>每一个变量声明都应该只对应着一个变量。不应该出现像<code class="">let a = 1,b = 2;</code>这样的语句。</p><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><h3 id="const%E6%94%BE%E4%B8%80%E8%B5%B7%EF%BC%8Clet%E6%94%BE%E4%B8%80%E8%B5%B7" tabindex="-1">const放一起，let放一起</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dragonball<span class="token punctuation">;</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>
<span class="token keyword">let</span> length<span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dragonball<span class="token punctuation">;</span>
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> len<span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">let</span> i<span class="token punctuation">,</span>
  len<span class="token punctuation">,</span>
  dragonball<span class="token punctuation">,</span>
  items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><h3 id="%E7%94%A8%E5%B1%9E%E6%80%A7%E5%80%BC%E7%BC%A9%E5%86%99" tabindex="-1">用属性值缩写</h3><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> lukeSkywalker <span class="token operator">=</span> <span class="token string">&quot;Luke Skywalker&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 正确</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lukeSkywalker</span><span class="token operator">:</span> lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h2 id="%E6%95%B0%E7%BB%84" tabindex="-1">数组</h2><h3 id="%E7%94%A8%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6%E5%81%9A%E6%95%B0%E7%BB%84%E6%B5%85%E6%8B%B7%E8%B4%9D" tabindex="-1">用扩展运算符做数组浅拷贝</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 错误</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E4%B8%8D%E8%A6%81%E7%94%A8%E9%81%8D%E5%8E%86%E5%99%A8%EF%BC%8C%E7%94%A8javascript%E9%AB%98%E7%BA%A7%E5%87%BD%E6%95%B0%E4%BB%A3%E6%9B%BF-for-in%E3%80%81for-of" tabindex="-1">不要用遍历器，用JavaScript高级函数代替 for-in、for-of</h3><p>用数组的这些迭代方法： <code class="">map()</code> / <code class="">every()</code> / <code class="">filter()</code> / <code class="">find()</code> / <code class="">findIndex()</code> / <code class="">reduce()</code> / <code class="">some()</code> / … , 用对象的这些方法 <code class="">Object.keys()</code> / <code class="">Object.values()</code> / <code class="">Object.entries()</code> 去产生一个数组， 这样你就能去遍历对象了。</p><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 正确</span>
<span class="token keyword">const</span> sum <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> total <span class="token operator">+</span> num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sum <span class="token operator">===</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
sum <span class="token operator">===</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token comment">// 正确</span>
<span class="token keyword">const</span> increasedByOne <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> increasedByOne <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  increasedByOne<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="%E5%87%BD%E6%95%B0-1" tabindex="-1">函数</h2><h3 id="%E6%8A%8A%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E5%8C%85%E8%A3%B9%E5%9C%A8%E5%9C%86%E6%8B%AC%E5%8F%B7%E9%87%8C" tabindex="-1">把立即执行函数包裹在圆括号里</h3><pre class="language-js"><code class="language-js"><span class="token comment">// immediately-invoked function expression (IIFE)</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Welcome to the Internet. Please follow me.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3 id="%E4%B8%8D%E8%A6%81%E4%BD%BF%E7%94%A8-arguments%EF%BC%8C%E7%94%A8rest%E8%AF%AD%E6%B3%95-%E2%80%A6-%E4%BB%A3%E6%9B%BF" tabindex="-1">不要使用 arguments，用rest语法 … 代替</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E6%8A%8A%E9%BB%98%E8%AE%A4%E5%8F%82%E6%95%B0%E8%B5%8B%E5%80%BC%E6%94%BE%E5%9C%A8%E6%9C%80%E5%90%8E" tabindex="-1">把默认参数赋值放在最后</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E4%B8%8D%E8%A6%81%E6%94%B9%E5%8F%82%E6%95%B0%EF%BC%8C%E4%B8%8D%E8%A6%81%E5%AF%B9%E5%8F%82%E6%95%B0%E9%87%8D%E6%96%B0%E8%B5%8B%E5%80%BC" tabindex="-1">不要改参数，不要对参数重新赋值</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span> <span class="token operator">?</span> obj<span class="token punctuation">.</span>key <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> a <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0" tabindex="-1">箭头函数</h2><h3 id="%E4%B8%8D%E8%A6%81%E4%BF%9D%E5%AD%98%E5%BC%95%E7%94%A8-this-%EF%BC%8C-%E7%94%A8%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%88%96%E5%87%BD%E6%95%B0%E7%BB%91%E5%AE%9A%E2%80%94%E2%80%94function%23bind" tabindex="-1">不要保存引用 this ， 用箭头函数或<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">函数绑定——Function#bind</a></h3><p>箭头函数提供了一种简洁的语法，并且避免了一些关于this指向的问题。相比较与function关键字，开发者应该优先使用箭头函数来声明函数，尤其是声明嵌套函数。</p><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%92%8C-return-%E8%AF%AD%E5%8F%A5" tabindex="-1">大括号和 return 语句</h3><p>如果函数体由一个没有副作用的表达式语句组成，删除大括号和<code class="">return</code>。否则，继续用大括号和 <code class="">return</code> 语句。</p><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextNumber <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nextNumber<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextNumber <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nextNumber<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="%E7%B1%BB%E5%92%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0" tabindex="-1">类和构造函数</h2><h3 id="%E7%94%A8-class-%EF%BC%8C%E9%81%BF%E5%85%8D%E7%9B%B4%E6%8E%A5%E6%93%8D%E4%BD%9C-prototype" tabindex="-1">用 Class ，避免直接操作 prototype</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">function</span> <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Queue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="%E7%94%A8-extends-%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF" tabindex="-1">用 extends 实现继承</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">class</span> <span class="token class-name">PeekableQueue</span> <span class="token keyword">extends</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> inherits <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;inherits&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">PeekableQueue</span><span class="token punctuation">(</span><span class="token parameter">contents</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Queue</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">inherits</span><span class="token punctuation">(</span>PeekableQueue<span class="token punctuation">,</span> Queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PeekableQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">peek</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="%E6%96%B9%E6%B3%95%E5%8F%AF%E4%BB%A5%E8%BF%94%E5%9B%9E-this-%E6%9D%A5%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%B3%95%E9%93%BE" tabindex="-1">方法可以返回 this 来实现方法链</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; true</span>
luke<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>
</code></pre><h2 id="%E6%A8%A1%E5%9D%97" tabindex="-1">模块</h2><h3 id="%E7%94%A8(-import-%2F-export-)-%E6%A8%A1%E5%9D%97%E8%80%8C%E4%B8%8D%E6%98%AF%E6%97%A0%E6%A0%87%E5%87%86%E7%9A%84%E6%A8%A1%E5%9D%97%E7%B3%BB%E7%BB%9F%E3%80%82" tabindex="-1">用( import / export ) 模块而不是无标准的模块系统。</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./StyleGuide&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> StyleGuide <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./StyleGuide&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> StyleGuide<span class="token punctuation">.</span>es6<span class="token punctuation">;</span>
</code></pre><h3 id="%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%8D%95%E4%B8%80%E5%AF%BC%E5%87%BA%E6%A8%A1%E5%9D%97%E9%87%8C%EF%BC%8C%E7%94%A8-export-default" tabindex="-1">在一个单一导出模块里，用 export default</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><h2 id="%E5%B1%9E%E6%80%A7" tabindex="-1">属性</h2><h3 id="%E5%BD%93%E8%8E%B7%E5%8F%96%E7%9A%84%E5%B1%9E%E6%80%A7%E6%98%AF%E5%8F%98%E9%87%8F%E6%97%B6%E7%94%A8%E6%96%B9%E6%8B%AC%E5%8F%B7-%5B%5D-%E5%8F%96" tabindex="-1">当获取的属性是变量时用方括号 [] 取</h3><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> luke<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isJedi <span class="token operator">=</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token string">&quot;jedi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F" tabindex="-1">比较运算符和表达式</h2><h3 id="%E7%94%A8-%3D%3D%3D-%E5%92%8C-!%3D%3D-%E8%80%8C%E4%B8%8D%E6%98%AF-%3D%3D-%E5%92%8C-!%3D" tabindex="-1">用 === 和 !== 而不是 == 和 !=</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
a <span class="token operator">===</span> b<span class="token punctuation">;</span>
foo <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
bananas <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">;</span>
value <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> foo <span class="token operator">===</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">;</span>
<span class="token string">&quot;hello&quot;</span> <span class="token operator">!==</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>
<span class="token number">0</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token boolean">true</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
foo <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
a <span class="token operator">==</span> b<span class="token punctuation">;</span>
foo <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
bananas <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">;</span>
value <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> foo <span class="token operator">==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">;</span>
<span class="token string">&quot;hello&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token boolean">true</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
foo <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><h3 id="%E5%B8%83%E5%B0%94%E5%80%BC%E7%94%A8%E7%BC%A9%E5%86%99%EF%BC%8C%E8%80%8C%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%92%8C%E6%95%B0%E5%AD%97%E8%A6%81%E6%98%8E%E7%A1%AE%E6%AF%94%E8%BE%83%E5%AF%B9%E8%B1%A1" tabindex="-1">布尔值用缩写，而字符串和数字要明确比较对象</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E4%B8%89%E5%85%83%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%B8%8D%E5%BA%94%E8%AF%A5%E5%B5%8C%E5%A5%97" tabindex="-1">三元表达式不应该嵌套</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">const</span> maybeNull <span class="token operator">=</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&quot;baz&quot;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&quot;bar&quot;</span> <span class="token operator">:</span> maybeNull<span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&quot;bar&quot;</span> <span class="token operator">:</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&quot;baz&quot;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><h3 id="%E9%81%BF%E5%85%8D%E4%B8%8D%E9%9C%80%E8%A6%81%E7%9A%84%E4%B8%89%E5%85%83%E8%A1%A8%E8%BE%BE%E5%BC%8F" tabindex="-1">避免不需要的三元表达式</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">||</span> b<span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>c<span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token operator">!</span>c<span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><h2 id="%E4%BB%A3%E7%A0%81%E5%9D%97" tabindex="-1">代码块</h2><h3 id="%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%8C%85%E8%A3%B9%E5%A4%9A%E8%A1%8C%E4%BB%A3%E7%A0%81%E5%9D%97" tabindex="-1">用大括号包裹多行代码块</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5" tabindex="-1">控制语句</h2><h3 id="%E9%81%BF%E5%85%8D%E5%A4%A7%E9%87%8F%E7%9A%84if-else" tabindex="-1">避免大量的if-else</h3><p>项目中经常会遇到条件语句的判断，有时候为了图方便直接 if else 无限嵌套下去，从而造成</p><ul><li>可读性查。一个if 里面就几十行几百行代码，很难快速定位到下一个条件</li><li>不易维护。很容易出现bug</li></ul><h3 id="%E4%BC%98%E5%8C%96-if-%E9%80%BB%E8%BE%91%2C-%E9%81%BF%E5%85%8D%E5%A4%9A%E4%BD%99%E7%9A%84else%2C-%E5%B0%BD%E6%97%A9return" tabindex="-1">优化 if 逻辑, 避免多余的Else, 尽早Return</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> results</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token function">doOtherStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">doMoreStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// ... etc</span>
  <span class="token comment">// ... etc</span>
<span class="token punctuation">}</span>


<span class="token comment">// 错误</span>
<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> results</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">doOtherStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">doMoreStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// ... etc</span>
    <span class="token comment">// ... etc</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">handleError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E7%94%A8%E9%80%89%E6%8B%A9%E6%93%8D%E4%BD%9C%E7%AC%A6%E4%BB%A3%E6%9B%BF%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5" tabindex="-1">用选择操作符代替控制语句</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">let</span> code <span class="token operator">=</span> info<span class="token punctuation">.</span>url_w <span class="token operator">||</span> info<span class="token punctuation">.</span>url_m <span class="token operator">||</span> info<span class="token punctuation">.</span>url_app <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">let</span> code <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>info<span class="token punctuation">.</span>url_app<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  code <span class="token operator">=</span> info<span class="token punctuation">.</span>url_app<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>info<span class="token punctuation">.</span>url_m<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  code <span class="token operator">=</span> info<span class="token punctuation">.</span>url_m<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>info<span class="token punctuation">.</span>url_w<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  code <span class="token operator">=</span> info<span class="token punctuation">.</span>url_w<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E6%9D%A1%E4%BB%B6%E6%95%B0%E9%87%8F%E5%A4%A7%E4%BA%8E3%E6%9D%A1%E6%97%B6%EF%BC%8C%E9%9C%80%E4%BB%A5object-%2F-map-%E5%AF%B9%E8%B1%A1%E5%AE%9E%E7%8E%B0%EF%BC%8C%E6%9B%B4%E5%A4%9A%E6%97%B6%E9%9C%80%E6%8A%BD%E6%88%90%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" tabindex="-1">条件数量大于3条时，需以<code class="">Object / Map</code> 对象实现，更多时需抽成配置文件</h3><pre class="language-js"><code class="language-js"><span class="token comment">// 正确 使用对象，key-value映射</span>
<span class="token keyword">const</span> cfg <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;bao&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;18&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;180&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> cfg<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;bao&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;18&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&quot;height&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;180&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="%E4%BD%BF%E7%94%A8-vue-%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%EF%BC%8C-%E9%81%BF%E5%85%8D%E5%A4%A7%E9%87%8F-if-else" tabindex="-1">使用 vue <a href="https://v2.cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6">动态组件</a>， 避免大量 if-else</h3><pre class="language-js"><code class="language-js"><span class="token comment">// config.js 配置文件</span>
<span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">&quot;./foo.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Bar <span class="token keyword">from</span> <span class="token string">&quot;./bar.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Baz <span class="token keyword">from</span> <span class="token string">&quot;./baz.vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> Foo<span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> Bar<span class="token punctuation">,</span>
  <span class="token literal-property property">baz</span><span class="token operator">:</span> Baz<span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>动态组件使用</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentComponent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&quot;./config&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">currentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> config<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="%E5%A4%8D%E6%9D%82%E5%88%A4%E6%96%AD%E6%9D%A1%E4%BB%B6%EF%BC%8C%E7%BB%93%E5%90%88%E5%88%A4%E6%96%AD%E5%87%BD%E6%95%B0" tabindex="-1">复杂判断条件，结合判断函数</h3><pre class="language-html"><code class="language-html">// config.js import Foo from &#39;./foo.vue&#39;; import Bar from &#39;./bar.vue&#39;; import
Baz from &#39;./baz.vue&#39;; // ... const config = [ { showCondition: value =&gt;
value.length &lt; 5, component: Foo, }, { showCondition: value =&gt; value.length &lt;
10, component: Bar, }, { showCondition: value =&gt; value.length &lt; 15, component:
Baz, }, // ... ];
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentComponent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&quot;./config&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">currentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> currentItem <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ele<span class="token punctuation">.</span><span class="token function">showCondition</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> currentItem <span class="token operator">&amp;&amp;</span> currentItem<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="%E6%B3%A8%E9%87%8A" tabindex="-1">注释</h2><h3 id="%E5%A4%9A%E8%A1%8C%E6%B3%A8%E9%87%8A" tabindex="-1">多行注释</h3><p>多行注释用 /*_ … _/</p><ul><li>@api: 提供给第三方使用的接口</li><li>@author: 标明作者</li><li>@description: 概述</li><li>@param: 参数</li><li>@return: 返回值</li><li>@todo: 待办</li><li>@version: 版本号</li><li>@inheritdoc: 文档继承</li><li>@property: 类属性</li><li>@property-read: 只读属性</li><li>@property-write: 只写属性</li><li>@const: 常量</li><li>@deprecated: 过期方法</li><li>@example: 示例</li><li>@final: 标识类是终态, 禁止派生</li><li>@global: 指明引用的全局变量</li><li>@static: 标识类、方法、属性是静态的</li><li>@ignore: 忽略</li><li>@internal: 限内部使用</li><li>@license: 协议</li><li>@link: 链接,引用文档等</li><li>@see: 与 link 类似, 可以访问内部方法或类</li><li>@method: 方法</li><li>@package: 命名空间</li><li>@since: 从指定版本开始的变动</li><li>@throws: 抛出异常</li><li>@uses: 使用</li><li>@var: 变量</li><li>@copyright: 版权声明</li></ul><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>

<span class="token comment">/**
 * make() returns a new element
 * based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>

<span class="token comment">// make() returns a new element</span>
<span class="token comment">// based on the passed in tag name</span>
<span class="token comment">//</span>
<span class="token comment">// @param {String} tag</span>
<span class="token comment">// @return {Element} element</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="%E5%8D%95%E8%A1%8C%E6%B3%A8%E9%87%8A" tabindex="-1">单行注释</h3><p>单行注释用//，将单行注释放在被注释区域上面。</p><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token comment">// is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// is current tab</span>
</code></pre><h2 id="%E9%A2%9D%E5%A4%96%E7%BB%93%E5%B0%BE%E9%80%97%E5%8F%B7" tabindex="-1">额外结尾逗号</h2><p>这导致git diffs更清洁。 此外，像Babel这样的转换器会删除转换代码中的额外的逗号，这意味着你不必担心旧版浏览器中的结尾逗号问题。</p><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;Dana&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Scully&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> heroes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Batman&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Superman&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createHero</span><span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> inventorOf</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// does nothing</span>
<span class="token punctuation">}</span>

<span class="token comment">// good (note that a comma must not appear after a &quot;rest&quot; element)</span>
<span class="token keyword">function</span> <span class="token function">createHero</span><span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> inventorOf<span class="token punctuation">,</span> <span class="token operator">...</span>heroArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// does nothing</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;Dana&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Scully&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> heroes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;Batman&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Superman&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createHero</span><span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> inventorOf</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// does nothing</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="%E4%B8%8D%E8%83%BD%E7%9C%81%E7%95%A5%E5%88%86%E5%8F%B7" tabindex="-1">不能省略分号</h2><p>每个语句必须以分号结尾。不允许依赖于JS自动添加分号的功能。</p><pre class="language-js"><code class="language-js"><span class="token comment">// 正确</span>
<span class="token keyword">let</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> leia <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>luke<span class="token punctuation">,</span> leia<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">jedi</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  jedi<span class="token punctuation">.</span>father <span class="token operator">=</span> <span class="token string">&quot;vader&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">let</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> leia <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span>luke<span class="token punctuation">,</span> leia<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">jedi</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>jedi<span class="token punctuation">.</span>father <span class="token operator">=</span> <span class="token string">&quot;vader&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="%E5%BC%BA%E5%88%B6%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2" tabindex="-1">强制类型转换</h2><h3 id="string%EF%BC%9A-%E7%94%A8string%E5%81%9A%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2" tabindex="-1">String： 用<code class="">String</code>做类型转换</h3><pre class="language-js"><code class="language-js"><span class="token comment">// =&gt; this.reviewScore = 9;</span>
<span class="token comment">// 正确 </span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不保证返回string</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// invokes this.reviewScore.valueOf()</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// typeof totalScore is &quot;object&quot; not &quot;string&quot;</span>
</code></pre><h3 id="numbers%3A-%E7%94%A8-number-%E5%81%9A%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%EF%BC%8Cparseint-%E8%BD%AC%E6%8D%A2-string-%E9%9C%80%E8%A6%81%E5%B8%A6%E4%B8%8A%E5%9F%BA%E6%95%B0%E3%80%82" tabindex="-1">Numbers: 用 Number 做类型转换，parseInt 转换 string 需要带上基数。</h3><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 正确 </span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token operator">+</span>inputValue<span class="token punctuation">;</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> inputValue <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3 id="boolean%3A-%E7%94%A8-!!-%E5%81%9A%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2" tabindex="-1">Boolean: 用 !! 做类型转换</h3><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 正确 </span>
<span class="token keyword">const</span> hasAge <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>age<span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">const</span> hasAge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,124)])))}}),g={__name:"js",setup(t){return(s,p)=>{const n=r;return a(),l(n,null,{default:u(()=>[k(i(m),{id:"markdown"})]),_:1})}}};export{g as default};
