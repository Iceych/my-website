<!--
 * @Author: chengchunlin 1875620109@qq.com
 * @Date: 2024-08-11 13:03:46
 * @LastEditors: chengchunlin 1875620109@qq.com
 * @LastEditTime: 2024-08-11 13:11:49
 * @FilePath: /my-website/src/views/standards/docs/css规范.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# css规范

## 命名规范

- 类名使用小写字母，以中划线分隔

```css
/* class */
.element-content {
    ...
}
```

关于 vscode 默认双击无法选中中划线拼接名称的问题，可以通过更改配置解决

```json
{
  // 默认为 "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?" 去除'-'
  "editor.wordSeparators": "`~!@#$%^&*()=+[{]}\\|;:'\",.<>/?"
}
```

- id采用驼峰式命名

```css
/* id */
#myDialog {
    ...
}
```

## ID和 Class 命名

使用有含义的 id 和 class 名称。

```css
/* 正确: 有特殊性 */
#gallery {
}
#login {
}
.video {
}

/* 正确: 通用 */
.aux {
}
.alt {
}

/* 错误：无意义 */
#yee-1901 {
}

/* 错误：不够特殊 */
.button-green {
}
.clear {
}
```

id 和 class 应该尽量简短，同时要容易理解。

```css
/* 正确 */
#nav {
}
.author {
}

/* 错误 */
#navigation {
}
.atr {
}
```

## 属性简写

尽量使用 CSS 中可以简写的属性 (如 font)，可以提高编码效率以及代码可读性。

```css
/* 正确 */
border-top: 0;
font:
  100%/1.6 palatino,
  georgia,
  serif;
padding: 0 1em 2em;

/* 错误 */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```

## 0 和单位

值为 0 时不用添加单位。

```css
margin: 0;
padding: 0;
```

## 开头的 0

值在 -1 和 1 之间时，不需要加 0。

```css
font-size: 0.8em;
```

## 16进制表示法

```css
/* 正确 */
color: #ebc;

/* 错误 */
color: #eebbcc;
```

## 前缀

使用带前缀的命名空间可以防止命名冲突，同时提高代码可维护性。

```css
.adw-help {
} /* AdWords */
#maia-note {
} /* Maia */
```

## 选择器分隔

每个选择器都另起一行。

```css
/* 正确 */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}

/* 错误 */
a:focus,
a:active {
  position: relative;
  top: 1px;
}
```

## 规则分隔

规则之间都用空行隔开。

```css
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

## 分段注释

用注释把 CSS 分成各个部分。

```css
/* Header */

#adw-header {
}

/* Footer */

#adw-footer {
}

/* Gallery */

.adw-gallery {
}
```
