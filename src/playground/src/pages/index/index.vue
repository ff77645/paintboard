<template>
  <view class="content">
    <canvas canvas-id="i-canvas" class="canvas"></canvas>
  </view>
</template>

<script setup>
import Painter from '../../../../painter/index.js'
import { onMounted } from 'vue'



const paths = [
  {
    type:'rect',
    style:{
      top:0,
      left:0,
      width:100,
      height:100,
      backgroundColor:'black'
    },
    Children:[

    ]
  },
  {
    type:'image',
    image:'http://pic.yupoo.com/isfy666/94184a1f/945dfe1e.jpeg',
    style:{
      dx:100,
      dy:100,
      dWidth:200,
      dHeight:200,
      round:6,
    }
  }
]

onMounted(async ()=>{
  // await new Promise((r)=>{
  //   setTimeout(r,500)
  // })
  const ctx = uni.createCanvasContext('i-canvas',this)
  console.log({ctx})
  const painter = new Painter(ctx,paths)

  painter.draw()
  // 设置圆的样式
  // ctx.setFillStyle('#4CAF50'); // 填充颜色
  // ctx.setStrokeStyle('#FF5722'); // 边框颜色
  // ctx.setLineWidth(5); // 边框宽度
  
  // // 绘制圆形
  // // 参数说明：(圆心x坐标, 圆心y坐标, 半径, 起始角度, 结束角度, 逆时针)
  // ctx.arc(150, 150, 100, 0, 2 * Math.PI, false);
  
  // // 填充和描边
  // ctx.fill();
  // ctx.stroke();
  
  // // 绘制
  // ctx.draw(true);
})



</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.canvas {
  width: 300px;
  height: 300px;
}
</style>
