<template>
  <div>
    <h3>底部導航欄</h3>
    <h1>三面板切換</h1>
    <!-- 父面板 -->
    <mt-tab-container v-model="active">
      <!-- 子面板 -->
      <mt-tab-container-item id="tab1">文章總覽</mt-tab-container-item>
      <mt-tab-container-item id="tab2">編寫文章</mt-tab-container-item>
      <mt-tab-container-item id="tab3">我的資料</mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部導航欄  fixed:導航欄固定在底部-->
    <mt-tabbar fixed v-model="active">
      <!-- 按鈕 -->
      <mt-tab-item id="tab1">
        <!-- 為圖片添加屬性：插槽 -->
        <img slot="icon" src="../../assets/article.png" alt="">
        文章
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../../assets/pen.png" alt="">
        撰寫
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../../assets/user.png" alt="">
        個人</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:""
    }
  },
}
</script>
