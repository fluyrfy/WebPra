<template>
  <div>
    <h1>Exam05 面板顯示</h1>
    <!-- 父面板 -->
    <mt-tab-container v-model="active">
      <!-- 子面板 -->
      <mt-tab-container-item id="tab1">子面板一</mt-tab-container-item>
      <mt-tab-container-item id="tab2">子面板二</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:"tab2",
    }
  },
}
</script>
