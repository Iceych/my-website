<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-07-03 19:34:02
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-07-03 19:43:05
 * @FilePath: /个人项目/src/views/eslint/docs/eslint常用配置.md
 * @Description: write something
 *
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved.
-->

```js
module.exports = {
  extends: [
    "plugin:vue/essential",
    "plugin:import/recommended",
    require.resolve("eslint-config-airbnb-base"),
  ],
  rules: {
    "array-callback-return": "off",
    "no-case-declarations": "off",
    "consistent-return": "off",
    "default-param-last": "off",
    "no-div-regex": "off",
    "for-direction": "off",
    "no-async-promise-executor": "off",
    "no-console": "off",
    "no-process-env": "off",
    "no-sync": "off",
    "array-element-newline": "off",
    "eol-last": "off",
    "func-names": "off",
    "id-denylist": "off",
    "lines-around-directive": "off",
    "newline-before-return": "off",
    "no-inline-comments": "off",
    "no-tabs": "off",
    "no-ternary": "off",
    "no-trailing-spaces": "off",
    "no-underscore-dangle": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "prefer-exponentiation-operator": "off",
    "quote-props": "off",
    quotes: "off",
    "require-jsdoc": "off",
    semi: "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "unicode-bom": "off",
    "wrap-regex": "off",
    "init-declarations": "off",
    "no-catch-shadow": "off",
    "no-undef-init": "off",
    "no-undefined": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "prefer-arrow-callback": "off",
    "object-shorthand": "off",
    "prefer-reflect": "off",
    "sort-imports": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/no-deprecated": "off",
    "import/no-named-as-default-member": "off",
    "import/no-amd": "off",
    "import/no-mutable-exports": "off",
    "import/imports-first": "off",
    "import/no-nodejs-modules": "off",
    "import/first": "off",
    "import/no-namespace": "off",
    "import/newline-after-import": "off",
    "import/no-restricted-paths": "off",
    "import/no-internal-modules": "off",
    "import/unambiguous": "off",
    "import/no-unassigned-import": "off",
    "import/no-anonymous-default-export": "off",
    "import/exports-last": "off",
    "import/group-exports": "off",
    "import/no-default-export": "off",
    "import/no-named-export": "off",
    "import/no-useless-path-segments": "off",
    "import/dynamic-import-chunkname": "off",
    "import/no-relative-parent-imports": "off",
    "import/no-unused-modules": "off",
    strict: "off",
    "vue/jsx-uses-vars": "off",
    "vue/script-setup-uses-vars": "off",
    "vue/no-async-in-computed-properties": "off",
    "vue/no-mutating-props": "off",
    "vue/require-valid-default-prop": "off",
    "vue/valid-v-slot": "off",
    "vue/valid-v-text": "off",
    "no-multiple-empty-lines": "off",

    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-param-reassign": "off",
    "no-useless-concat": "off",
    "no-template-curly-in-string": "off",
    "max-classes-per-file": "off",
  },
  parserOptions: {
    // "parser": require.resolve("@babel/eslint-parser"),
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      presets: [[require.resolve("@babel/preset-env")]],
      plugins: [
        [
          require.resolve("@babel/plugin-proposal-decorators"),
          {
            legacy: true,
          },
        ],
        [
          require.resolve("@babel/plugin-transform-runtime"),
          {
            corejs: false,
            helpers: false,
            regenerator: true,
            version: "7.17.2",
          },
        ],
      ],
    },
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  globals: {
    weex: "readonly",
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx"],
    "import/resolver": {
      // https://github.com/benmosher/eslint-plugin-import/issues/1396
      [require.resolve("eslint-import-resolver-node")]: {},
      [require.resolve("eslint-import-resolver-webpack")]: {
        config: {
          resolve: {
            extensions: [".js", ".vue", ".json"],
            // alias: {
            //     '@': sourceDirPath,
            //     static: staticDirPath,
            // },
          },
        },
      },
    },
  },
};
```
