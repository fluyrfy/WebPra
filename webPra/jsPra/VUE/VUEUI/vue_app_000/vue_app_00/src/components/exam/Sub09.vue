<template>
  <div>
    <h1>sub09子組件</h1>
    <!-- 顯示父組件數據 -->
    <!-- 為h3綁定點及事件處理函數，函數由父組件傳入 -->
    <h3 @click="add3">{{msg}}</h3>
    <!-- 接收圖片 -->
    <img :src="img3" alt="父組件傳的圖片">
  </div>
</template>
<script>
export default {
  props:{ //接收參數
    msg:{default:""}, //參數名:msg,默認字符串
    add3:{type:Function}, //type接收類型 Function類型為函數
    img3:{default:""} //圖片路徑
  }
}
</script>
