<template>
  <div>
     <h1>Exam02.vue</h1>
     <button @click="handle1">点击完成操作</button>
     <button @click="handle2">顯示交互式提示框</button>
     <button @click="handle3">顯示確認框</button>
     <button @click="handle4">輸入框</button>
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
          message:"删除成功", //顯示消息內容
          position:"middle",//顯示位置
          iconClass:"iconfont icon-chenggong"//顯示圖標(成功)
        })
    },
    handle2(){
      //顯示交互式提示框
      this.$messagebox("消息！","數據加載成功")//簡寫,標題可省略
    },
    handle3(){
      //確認提示框
      this.$messagebox.confirm("是否刪除指定數據")//確認內容
      .then(res=>//確認執行成功後回調用
      {console.log(res)}).catch(err=>{console.log(err)})//取消後調用;
    },
    handle4(){
      //輸入交互框
      this.$messagebox.prompt("請輸入卡號")//確認內容
      .then((value)=>{console.log(value);})//輸入內容、確認選項
      .catch(err=>{console.log(err);//取消選項
      })
    },

  }
}
</script>

