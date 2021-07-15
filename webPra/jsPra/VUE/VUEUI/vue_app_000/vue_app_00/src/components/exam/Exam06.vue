<template>
  <div>
    <h1>三面板切換</h1>
    <!-- 父面板 -->
    <mt-tab-container v-model="active">
      <!-- 子面板 -->
      <mt-tab-container-item id="tab1">美食總覽</mt-tab-container-item>
      <mt-tab-container-item id="tab2">購物總覽</mt-tab-container-item>
      <mt-tab-container-item id="tab3">休閒總覽</mt-tab-container-item>
    </mt-tab-container>
    <mt-button @click="tab1">美食</mt-button>
    <mt-button @click="tab2">購物</mt-button>
    <mt-button @click="tab3">休閒</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:"tab3"
    }
  },
  methods: {
    tab1(){
      this.active="tab1";
    },
    tab2(){
      this.active="tab2";
    },
    tab3(){
      this.active="tab3";
    },
  },
}
</script>
