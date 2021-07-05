<template>
  <div>
     <h1>Exam02.vue</h1>
     <button @click="handle1">点击完成操作</button>
  </div>
</template>
<script>
export default {
  methods:{
    handle1(){
      //按钮事件处理函数
      //console.log(123);
      this.$toast(
        {
          message:"删除成功",
          position:"bottom"
        })
    }
  }
}
</script>

