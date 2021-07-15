<template>
  <div>
    <h1>Fa08.vue 父組件</h1></h1>
    <!-- 調用子組件 -->
    <sub08></sub08>
  </div>
</template>
<script>
// 引入子組件
import Sub08 from './Sub08.vue'
export default {
  data() {
    return {

    }
  },
  // 註冊子組件
  components:{
    "sub08":Sub08
  }
}
</script>
