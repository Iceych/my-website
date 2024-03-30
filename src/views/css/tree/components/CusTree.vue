<template>
  <canvas id="canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

let canvas;
const maxBranch = 3; // 一根树干上最大有几个分叉
const dpr = window.devicePixelRatio * 2;
let ctx,
  W = window.innerWidth,
  H = window.innerHeight;

const init = () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  W = canvas.clientWidth;
  H = canvas.clientHeight;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);

  ctx.scale(dpr, dpr);
  ctx.imageSmoothingEnabled = true;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  // 开启抗锯齿
  ctx.translate(0.5, 0.5);
};

/**
 * @description 递归画树枝
 * @param {Number} startX 该条树枝起始x坐标
 * @param {Number} startY 该条树枝起始y标
 * @param {Number} length 该条树枝长度
 * @param {Number} angle 该条树枝旋转角度
 * @param {Number} depth 该条树枝是第几层
 * @param {Number} branchWidth 该条树枝宽度
 */
var draw = function (startX, startY, length, angle, depth, branchWidth) {
  var color = "rgb(96,50,25)"; // 树干树枝颜色
  if (depth-- <= 2) {
    color = "rgb(0,150,0)";
  }
  const angelX = Math.cos(angle);
  const angelY = Math.sin(angle);
  ctx.strokeStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 1;

  function drawNowFram(timap) {
    // 刻画当前帧
    drawNowFram.startTime = drawNowFram.startTime || timap;
    let jin = (timap - drawNowFram.startTime) / 8 / length; // 每8ms长度多1px
    if (jin >= 1) {
      jin = 1;
    }
    const frameX = startX + length * jin * angelX;
    const frameY = startY + length * jin * angelY;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineWidth = branchWidth;
    ctx.lineTo(frameX, frameY);
    ctx.stroke();
    if (jin < 1) {
      requestAnimationFrame(drawNowFram);
    } else {
      drawNext(frameX, frameY);
    }
  }
  requestAnimationFrame(drawNowFram);
  function drawNext(endX, endY) {
    // 画衍生树枝
    if (!depth) return;
    for (var i = 0; i < 2; i++) {
      // 左右两根树枝
      let newAngle = angle + random(-Math.PI / 4, 0); // 左偏转
      if (i % 2 == 0) {
        newAngle = angle + random(0, Math.PI / 4);
      } // 右偏转
      const newLength = length * random(0.7, 0.9); // 新长度缩减
      const newBranchWidth = branchWidth * 0.7;
      const ran = random(0.7, 1);
      const newStartX = startX + length * ran * angelX;
      const newStartY = startY + length * ran * angelY;
      // const newStartX = endX;
      // const newStartY = endY;
      draw(newStartX, newStartY, newLength, newAngle, depth, newBranchWidth); // 从该树枝末端重新生长新的树枝
    }
  }
};
function random(min, max) {
  return Math.random() * (max - min) + min;
} // 返回随机数

function drawForest(num) {
  while (num > 0) {
    const disW = random(-800, 800),
      disH = random(0, 500);
    console.log(disW, disH);
    draw(W / 2, H, random(70, 120), -Math.PI / 2, 12, 25); // 第一根垂直的树干
    num--;
  }
}

onMounted(() => {
  init();
  // draw(W / 2, H - 100, 120, -Math.PI / 2, 12, 25); // 第一根垂直的树干
  drawForest(1);
});
</script>

<style lang="less" scoped>
#canvas {
  width: 100%;
  height: 500px;
  // border: 1px solid black;
}
</style>
