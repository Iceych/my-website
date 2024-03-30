<!--
 * @Author: chengchunlin 
 * @Date: 2023-11-01 08:54:11
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-21 09:13:58
 * @FilePath: /back-template/src/views/404-page.vue
 * @Description: 兜底页
 * 
 * Copyright (c) 2023 by 天天基金/chengchunlin, All Rights Reserved. 
-->
<template>
  <div id="error-page" ref="wrapPage" class="noSelect">
    <div class="head404 flex_center">
      <canvas class="canvas" ref="canv"></canvas>
    </div>
    <div class="tt flex-col ai-center" style="height: 100%">
      <div class="flex"></div>
      <div class="txtbg404">
        <div class="txtbox">
          <p class="tip">对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>
          <p class="tip paddingbox">请点击以下链接继续浏览网页</p>
          <p class="tip cursor" @click="gohome">》回到首页</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { debounce } from 'lodash';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const text_arr = ['page', 'Not Found', '404', '找不到页面']; //显示文字
const text_num = 50; //页面要显示的文字个数
const txt_color = '#fff'; // 文字颜色
const font_family = 'KaiTi'; // 字体样式，楷体
const txt_min_size = 10; //文字最小大小
const txt_max_size = 50; //文字最大大小
const txt_min_speed = 2; //弹幕最小速度
const txt_max_speed = 3; //弹幕最大速度

// 弹幕池
let word_arr;

let w = window.innerWidth;
let h = window.innerHeight;

let requestID = null; // window.requestAnimationFrame返回的id，销毁时需要

const wrapPage = ref();
const canv = ref();
let ctx;

const draw = () => {
  ctx.clearRect(0, 0, w, h); // 把从(0,0)坐标到(x,y)坐标围成的矩形区域清空
  ctx.fillStyle = txt_color; // 设置画笔颜色
  word_arr.forEach((e) => {
    //设置文字大小，样式
    ctx.font = e.size + 'px ' + font_family;
    // 测量文字宽度
    var t_w = e.width || ctx.measureText(e.text);

    ctx.fillText(e.text, e.x, e.y);
    e.x += e.speed;
    //如果大于窗口宽度，那么重新返回，并且随机y轴位置和大小以及速度
    if (e.x >= w) {
      e.x = -t_w.width * 3;
      e.y = $tools.random(0, h);
      e.size = $tools.randomInt(txt_min_size, txt_max_size);
      e.speed = $tools.random(txt_min_speed, txt_max_speed);
      ctx.font = e.size + 'px ' + font_family;
      e.width = ctx.measureText(e.text);
    }
  });
  requestID = window.requestAnimationFrame(draw);
};

const resize = debounce(() => {
  w = wrapPage.value.clientWidth;
  h = wrapPage.value.clientHeight;
  canv.value.width = w;
  canv.value.height = h;
}, 300);
onMounted(() => {
  w = wrapPage.value.clientWidth;
  h = wrapPage.value.clientHeight;
  canv.value.width = w;
  canv.value.height = h;
  ctx = canv.value.getContext('2d');

  // 初始化弹幕信息
  word_arr = new Array(text_num).fill(1).map(() => ({
    x: $tools.random(-150, w), // 范围弄扩到屏幕左侧以外，这样更有连贯性，不然刚开页面的时候可能太密集并出现一小段空屏
    y: $tools.random(0, h),
    text: text_arr[$tools.randomInt(0, text_arr.length)],
    size: $tools.randomInt(txt_min_size, txt_max_size),
    speed: $tools.random(txt_min_speed, txt_max_speed)
  }));

  window.addEventListener('resize', resize);

  draw();
});
onUnmounted(() => {
  window.removeEventListener('resize', resize);

  window.cancelAnimationFrame(requestID);
});

const router = useRouter();
const gohome = () => {
  router.replace({ path: '/' });
};
</script>

<style lang="less" scoped>
#error-page {
  background: #494949;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.head404 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.5;
}
.canvas {
  background: #494949;
  display: block;
}
.tt {
  z-index: 0;
}
.txtbg404 {
  width: 499px;
  height: 169px;
  background: url('/src/assets/img/txtbg404.png') no-repeat;
}
.txtbox {
  width: 390px;
  position: relative;
  top: 30px;
  left: 60px;
  color: #eee;
  font-size: 13px;
}
.tip {
  margin: 5px 0;
  line-height: 18px;
}
.paddingbox {
  padding-top: 15px;
}
.cursor {
  cursor: pointer;
}
</style>
