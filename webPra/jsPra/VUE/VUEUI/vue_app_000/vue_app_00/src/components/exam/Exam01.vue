<template><!--自定义组件-->
  <div><!--根元素 div-->
    <h1>src/componets/exam/Exam01.vue</h1>
    <h3>自定义组件Exam01.vue</h3>    
  </div>
</template>
<script>
//#调用短消息组件 
export default {
  created() {
    //vue组件生命周期事件,表示当前创建创建成功
    //立即调用函数 11:33
    //默认3s后消息
    //访问路径:http://127.0.0.1:5050/#/Exam01
    this.$toast({message:"添加成功"});
  },
}
</script>

