<!--
 * @Author: chengchunlin 1875620109@qq.com
 * @Date: 2024-08-11 12:27:24
 * @LastEditors: chengchunlin 1875620109@qq.com
 * @LastEditTime: 2024-08-11 13:02:45
 * @FilePath: /my-website/src/views/standards/docs/js规范.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# js规范

## 常见变量命名法

- 骆驼(`camelCase`)命名法 骆驼式命名法，正如它的名称所表示的那样，是指混合使用大小写字母来构成变量和函数的名字。增加程序可读性。
- 帕斯卡(`PascalCase`)命名法 与骆驼命名法类似，只不过骆驼命名法是首字母小写，而帕斯卡命名法是首字母大写。

## 命名格式

### 变量

变量必须采用`camelCase`命名。

```js
// 正确
let autoPlay = true;
let frameIndex = 0;

// 错误
let AutoPlay = true;
let frameindex = 0;
```

### 常量

常量命名应该使用全大写格式，并用下划线分割

```js
// 正确
const NUMBER = 5;

// 错误
const number = 5;
```

### 函数

函数的参数使用`动宾结构`+`camelCase`命名法，参数使用`camelCase`

```js
function getData(myData) {}
```

### 类

类使用`PascalCase`，类的方法和属性的命名使用 `camelCase`

```js
class Engine {
    private value: string;
    doSomeThing(){
        ...
    }
}
```

## 命名规则

### 前缀

前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)

### 常用语义前缀

| 动词   | 含义                         | 返回值                                                |
| ------ | ---------------------------- | ----------------------------------------------------- |
| can    | 判断是否可执行某个动作(权限) | 函数返回一个布尔值。true：可执行；false：不可执行     |
| has    | 判断是否含有某个值           | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is     | 判断是否为某个值             | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get    | 获取某个值                   | 函数返回一个非布尔值                                  |
| set    | 设置某个值                   | 无返回值、返回是否设置成功或者返回链式对象            |
| load   | 加载某些数据                 | 无返回值或者返回是否加载完成的结果                    |
| init   | 初始化                       | 无返回值或者返回初始化的结果                          |
| handle | 事件处理                     | 无返回值或者返回事件处理的结果                        |

```js
// 加载数据
function loadData(): boolean {
  return {};
}
// 获取名称
function getName(): string {
  return this.name;
}
```

### 体现变量类型

尽量在变量名字中体现所属类型，如:`length`、`count`等表示数字类型；而包含`name`、`title`表示为字符串类型。

### 布尔值变量

`boolean` 类型的变量使用 `is` 或 `has` 开头

```js
const isReady = false;
const hasMoreCommands = false;
```

## 变量

### 杜绝var

使用const或let来声明所有局部变量。如果变量不需要被重新赋值，默认应该使用const。应该拒绝使用关键字var。

```js
// 正确
const example = 42;
let count = 1;
if (true) {
  count += 1;
}

// 错误
var example = 42;
var count = 1;
if (true) {
  count += 1;
}
```

### 每次只声明一个变量

每一个变量声明都应该只对应着一个变量。不应该出现像`let a = 1,b = 2;`这样的语句。

```js
// 正确
let a = 1;
let b = 2;
let c = 3;

// 错误
let a = 1,
  b = 2,
  c = 3;
```

### const放一起，let放一起

```js
// 正确
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;

// 错误
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// 错误
let i,
  len,
  dragonball,
  items = getItems(),
  goSportsTeam = true;
```

### 用属性值缩写

```js
const lukeSkywalker = "Luke Skywalker";

// 正确
const obj = {
  lukeSkywalker,
};

// 错误
const obj = {
  lukeSkywalker: lukeSkywalker,
};
```

## 数组

### 用扩展运算符做数组浅拷贝

```js
// 正确
const itemsCopy = [...items];
// 错误
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}
```

### 不要用遍历器，用JavaScript高级函数代替 for-in、for-of

用数组的这些迭代方法： `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... , 用对象的这些方法 `Object.keys()` / `Object.values()` / `Object.entries()` 去产生一个数组， 这样你就能去遍历对象了。

```js
const numbers = [1, 2, 3, 4, 5];

// 正确
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// 错误
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// 正确
const increasedByOne = numbers.map((num) => num + 1);

// 错误
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}
```

## 函数

### 把立即执行函数包裹在圆括号里

```js
// immediately-invoked function expression (IIFE)
(function () {
  console.log("Welcome to the Internet. Please follow me.");
})();
```

### 不要使用 arguments，用rest语法 ... 代替

```js
// 正确
function concatenateAll(...args) {
  return args.join("");
}

// 错误
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join("");
}
```

### 把默认参数赋值放在最后

```js
// 正确
function handleThings(name, opts = {}) {
  // ...
}

// 错误
function handleThings(opts = {}, name) {
  // ...
}
```

### 不要改参数，不要对参数重新赋值

```js
// 正确
function f1(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, "key") ? obj.key : 1;
}

function f2(a) {
  const b = a || 1;
  // ...
}

function f3(a = 1) {
  // ...
}

// 错误
function f1(obj) {
  obj.key = 1;
}

function f2(a) {
  a = 1;
  // ...
}

function f3(a) {
  if (!a) {
    a = 1;
  }
  // ...
}
```

## 箭头函数

### 不要保存引用 this ， 用箭头函数或[函数绑定——Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

箭头函数提供了一种简洁的语法，并且避免了一些关于this指向的问题。相比较与function关键字，开发者应该优先使用箭头函数来声明函数，尤其是声明嵌套函数。

```js
// 正确
function foo() {
  return () => {
    console.log(this);
  };
}

// 错误
function foo() {
  const _this = this;
  return function () {
    console.log(_this);
  };
}
```

### 大括号和 return 语句

如果函数体由一个没有副作用的表达式语句组成，删除大括号和`return`。否则，继续用大括号和 `return` 语句。

```js
// 正确
[1, 2, 3].map((number) => `A string containing the ${number}.`);
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// 错误
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});
```

## 类和构造函数

### 用 Class ，避免直接操作 prototype

```js
// 正确
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}

// 错误
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};
```

### 用 extends 实现继承

```js
// 正确
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}

// 错误
const inherits = require("inherits");
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this._queue[0];
};
```

### 方法可以返回 this 来实现方法链

```js
// 正确
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump().setHeight(20);

// 错误
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined
```

## 模块

### 用( import / export ) 模块而不是无标准的模块系统。

```js
// 正确
import { es6 } from "./StyleGuide";
export default es6;

// 错误
const StyleGuide = require("./StyleGuide");
module.exports = StyleGuide.es6;
```

### 在一个单一导出模块里，用 export default

```js
// 正确
export default function foo() {}

// 错误
export function foo() {}
```

## 属性

### 当获取的属性是变量时用方括号 [] 取

```js
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp("jedi");
```

## 比较运算符和表达式

### 用 === 和 !== 而不是 == 和 !=

```js
// 正确
a === b;
foo === true;
bananas !== 1;
value === undefined;
typeof foo === "undefined";
"hello" !== "world";
0 === 0;
true === true;
foo === null;

// 错误
a == b;
foo == true;
bananas != 1;
value == undefined;
typeof foo == "undefined";
"hello" != "world";
0 == 0;
true == true;
foo == null;
```

### 布尔值用缩写，而字符串和数字要明确比较对象

```js
// 正确
if (isValid) {
  // ...
}
if (name !== "") {
  // ...
}
if (collection.length > 0) {
  // ...
}

// 错误
if (isValid === true) {
  // ...
}
if (name) {
  // ...
}
if (collection.length) {
  // ...
}
```

### 三元表达式不应该嵌套

```js
// 正确
const maybeNull = value1 > value2 ? "baz" : null;
const foo = maybe1 > maybe2 ? "bar" : maybeNull;

// 错误
const foo = maybe1 > maybe2 ? "bar" : value1 > value2 ? "baz" : null;
```

### 避免不需要的三元表达式

```js
// 正确
const foo = a || b;
const bar = !!c;
const baz = !c;

// 错误
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
```

## 代码块

### 用大括号包裹多行代码块

```js
// 正确
if (test) return false;
if (test) {
  return false;
}
function bar() {
  return false;
}

// 错误
if (test) return false;

function foo() {
  return false;
}
```

## 控制语句

### 避免大量的if-else

项目中经常会遇到条件语句的判断，有时候为了图方便直接 if else 无限嵌套下去，从而造成

- 可读性查。一个if 里面就几十行几百行代码，很难快速定位到下一个条件
- 不易维护。很容易出现bug

### 优化 if 逻辑, 避免多余的Else, 尽早Return

```js
// 正确
function(err, results) {
  if (err) {
    handleError(err)
    return
  }

  doOtherStuff()
  doMoreStuff()
  // ... etc
  // ... etc
}


// 错误
function(err, results) {
  if (!err) {
    doOtherStuff()
    doMoreStuff()
    // ... etc
    // ... etc
  } else {
    handleError(err)
  }
}
```

### 用选择操作符代替控制语句

```js
// 正确
let code = info.url_w || info.url_m || info.url_app || "";

// 错误
let code = "";
if (info.url_app.length > 0) {
  code = info.url_app;
}
if (info.url_m.length > 0) {
  code = info.url_m;
}
if (info.url_w.length > 0) {
  code = info.url_w;
}
```

### 条件数量大于3条时，需以`Object / Map` 对象实现，更多时需抽成配置文件

```js
// 正确 使用对象，key-value映射
const cfg = {
  name: "bao",
  age: "18",
  height: "180",
};
const foo = (v) => cfg[v];

// 错误
const foo = (v) => {
  if (v === "name") {
    return "bao";
  } else if (v === "age") {
    return "18";
  } else if (v === "height") {
    return "180";
  }
};
```

### 使用 vue [动态组件](https://v2.cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6)， 避免大量 if-else

```js
// config.js 配置文件
import Foo from "./foo.vue";
import Bar from "./bar.vue";
import Baz from "./baz.vue";
// ...

const config = {
  foo: Foo,
  bar: Bar,
  baz: Baz,
  // ...
};
```

动态组件使用

```html
<template>
  <div>
    <component :is="currentComponent"></component>
  </div>
</template>
<script>
  import config from "./config";

  export default {
    data() {
      return {
        state: "foo",
      };
    },
    computed: {
      currentComponent() {
        return config[this.state];
      },
    },
  };
</script>
```

### 复杂判断条件，结合判断函数

```html
// config.js import Foo from './foo.vue'; import Bar from './bar.vue'; import
Baz from './baz.vue'; // ... const config = [ { showCondition: value =>
value.length < 5, component: Foo, }, { showCondition: value => value.length <
10, component: Bar, }, { showCondition: value => value.length < 15, component:
Baz, }, // ... ];
<template>
  <div>
    <component :is="currentComponent"></component>
  </div>
</template>
<script>
  import config from "./config";

  export default {
    data() {
      return {
        state: "",
      };
    },
    computed: {
      currentComponent() {
        const currentItem = config.find((ele) => ele.showCondition(this.state));
        return currentItem && currentItem.component;
      },
    },
  };
</script>
```

## 注释

### 多行注释

多行注释用 /\*_ ... _/

```js
// 正确

/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element;
}

// 错误

// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
  // ...

  return element;
}
```

### 单行注释

单行注释用//，将单行注释放在被注释区域上面。

```js
// 正确
// is current tab
const active = true;

// 错误
const active = true; // is current tab
```

## 额外结尾逗号

这导致git diffs更清洁。 此外，像Babel这样的转换器会删除转换代码中的额外的逗号，这意味着你不必担心旧版浏览器中的结尾逗号问题。

```js
// 正确
const hero = {
  firstName: "Dana",
  lastName: "Scully",
};

const heroes = ["Batman", "Superman"];

function createHero(firstName, lastName, inventorOf) {
  // does nothing
}

// good (note that a comma must not appear after a "rest" element)
function createHero(firstName, lastName, inventorOf, ...heroArgs) {
  // does nothing
}

// 错误
const hero = {
  firstName: "Dana",
  lastName: "Scully"
};

const heroes = [
  'Batman',
  'Superman'
];

function createHero(firstName, lastName, inventorOf) {
  // does nothing
}
```

## 不能省略分号

每个语句必须以分号结尾。不允许依赖于JS自动添加分号的功能。

```js
// 正确
let luke = {};
let leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = "vader";
});

// 错误
let luke = {}
let leia = {}
[(luke, leia)].forEach((jedi) => (jedi.father = "vader"));
```

## 强制类型转换

### String： 用`String`做类型转换

```js
// => this.reviewScore = 9;
// 正确 
const totalScore = String(this.reviewScore);

// 错误
const totalScore = this.reviewScore.toString(); // 不保证返回string
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"
```

### Numbers: 用 Number 做类型转换，parseInt 转换 string 需要带上基数。

```js
const inputValue = '4';
// 正确 
const val = Number(inputValue);
const val = parseInt(inputValue, 10);

// 错误
const val = new Number(inputValue);
const val = +inputValue;
const val = inputValue >> 0;
const val = parseInt(inputValue);
```

### Boolean: 用 !! 做类型转换

```js
const age = 0;
// 正确 
const hasAge = !!age;

// 错误
const hasAge = new Boolean(age);
```