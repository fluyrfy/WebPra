<template> <!--入口組件-->
  <div class="page-tabbar">
    <!-- <h1>Home.vue</h1> -->
    <div class="page-wrap">
      <!-- 調用子組件 -->
      <title-bar leftTitle="Crusaders Quest (99+)" :rightFirstImg="require('../../assets/ic_search.png')" :rightSecondImg="require('../../assets/ic_add.png')" :search="mysearch" :add3="myadd3"></title-bar>
    </div>
  </div>
</template>
<script>
import TitleBar from './common/TitleBar.vue' //引入子組件
export default {
  data() {
    return {

    }
  },
  components:{
    "titleBar":TitleBar //註冊組件
  },
  methods: {
    mysearch(){
      console.log("搜索")
    },
    myadd3(){
      console.log("添加")
    }
  },

}
</script>
