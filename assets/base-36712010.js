import{d as o,o as a,c as e,f as r,g as u,w as c,b as l,h as i,i as k}from"./index-9362ae99.js";const q={class:"markdown-body"},y=o({__name:"eslint常用配置",setup(t,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,n)=>(a(),e("div",q,n[0]||(n[0]=[r(`<pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;plugin:vue/essential&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:import/recommended&quot;</span><span class="token punctuation">,</span>
    require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;eslint-config-airbnb-base&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;array-callback-return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-case-declarations&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;consistent-return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;default-param-last&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-div-regex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;for-direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-async-promise-executor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-process-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-sync&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;array-element-newline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;eol-last&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;func-names&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;id-denylist&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lines-around-directive&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;newline-before-return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-inline-comments&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-tabs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-ternary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-trailing-spaces&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-underscore-dangle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;one-var&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;one-var-declaration-per-line&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;operator-linebreak&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;padded-blocks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;padding-line-between-statements&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefer-exponentiation-operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;quote-props&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;require-jsdoc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;semi-spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;semi-style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sort-keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sort-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;space-before-blocks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;space-before-function-paren&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;unicode-bom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;wrap-regex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;init-declarations&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-catch-shadow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-undef-init&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-undefined&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;arrow-body-style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;arrow-parens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefer-arrow-callback&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;object-shorthand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefer-reflect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sort-imports&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-deprecated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-named-as-default-member&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-amd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-mutable-exports&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/imports-first&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-nodejs-modules&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/first&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/newline-after-import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-restricted-paths&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-internal-modules&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/unambiguous&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-unassigned-import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-anonymous-default-export&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/exports-last&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/group-exports&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-default-export&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-named-export&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-useless-path-segments&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/dynamic-import-chunkname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-relative-parent-imports&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-unused-modules&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue/jsx-uses-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue/script-setup-uses-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue/no-async-in-computed-properties&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue/no-mutating-props&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue/require-valid-default-prop&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue/valid-v-slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue/valid-v-text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-multiple-empty-lines&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;import/extensions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/no-unresolved&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-param-reassign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-useless-concat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-template-curly-in-string&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;max-classes-per-file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;parser&quot;: require.resolve(&quot;@babel/eslint-parser&quot;),</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;babel-eslint&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2018</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">requireConfigFile</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">babelOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">babelrc</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
          require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">legacy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
          require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">helpers</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">regenerator</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&quot;7.17.2&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">legacyDecorators</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">weex</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;import/extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.mjs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;import/resolver&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// https://github.com/benmosher/eslint-plugin-import/issues/1396</span>
      <span class="token punctuation">[</span>require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;eslint-import-resolver-node&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;eslint-import-resolver-webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// alias: {</span>
            <span class="token comment">//     &#39;@&#39;: sourceDirPath,</span>
            <span class="token comment">//     static: staticDirPath,</span>
            <span class="token comment">// },</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>`,1)])))}}),f={__name:"base",setup(t){return(s,p)=>{const n=k;return a(),u(n,null,{default:c(()=>[l(i(y),{id:"markdown"})]),_:1})}}};export{f as default};
