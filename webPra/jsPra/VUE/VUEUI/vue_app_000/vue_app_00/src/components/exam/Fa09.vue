<template>
  <div>
    <h1>Fa09父組件</h1>
    <!-- 傳數據給子組件 -->
    <sub09 :msg="msg" :add3="myadd3" :img3="require('../../assets/user.png')"></sub09>
  </div>
</template>
<script>
import Sub09 from './Sub09.vue'
export default {
  data() {
    return {
      msg:'測試數據123'
    }
  },
  components:{
    "sub09":Sub09
  },
  methods: {
    myadd3(){
      console.log("父組件創建函數")
    }
  },
}
</script>
