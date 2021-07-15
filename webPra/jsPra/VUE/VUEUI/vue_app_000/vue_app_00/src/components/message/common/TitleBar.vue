<template>
  <div class="page-head">
    <!-- <h1>TitleBar.vue</h1> -->
    <!-- 頂部導航條子組件 -->
    <!-- 左側文字 -->
    <span>{{leftTitle}}</span>
    <!-- 右側兩張可點擊圖片 -->
    <div class="right-head">
      <div><img :src="rightFirstImg" alt="" @click="search" class="searchdiv" style="width: 30px;"></div>
      <div><img :src="rightSecondImg" alt="" @click="add3" class="searchdiv" style="width: 30px;margin-right: 20px;margin-left: 15px;"></div>
    </div>
  </div>
</template>
<script>
export default {
  props:{//生明街收復組件數據
    leftTitle:{default:""},//1.左側文字
    rightFirstImg:{default:""}, //2.右側第一張圖
    rightSecondImg:{default:""}, //3.右側第二張圖
    search:{type:Function}, //4.事件處理函數
    add3:{type:Function},
  }
}
</script>
<style scoped>
  /* 最外層父元素 */
  .page-head{
    display: flex;/*當前父元素彈性布局*/
    position: fixed; /*固定定位*/
    z-index: 999; /*浮動所有元素上方*/
    width: 100%;
    justify-content: space-between; /*兩個元素兩端對齊*/
    align-items: center; /*垂直居中*/
    background-color: #393a3e; /*灰色背景*/
    padding-left: 7px; /*內邊距*/
    padding-right: 7px;
    height: 48px;
    color: #fff;
    font-size: 18px;
  }
  /* 右側圖片區域 */
  .right-head{
    display: flex;
  }
  /* 圖片div */
  .searchdiv{
    display: flex;
    align-items: center;
    height: 48px;
  }
</style>
