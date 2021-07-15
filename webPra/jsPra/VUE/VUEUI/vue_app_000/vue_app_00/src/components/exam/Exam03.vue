<template>
  <div>
    Exam03.vue
    <!-- 表單輸入框 用戶名 密碼 年齡 提交按鈕-->
    <mt-field label="用戶名" :attr="{maxlength:10}" placeholder="請輸入用戶名" v-model="uname"></mt-field>
    <mt-field label="密碼" :attr="{maxlength:10}" placeholder="請輸入密碼" type="password" v-model="upwd"></mt-field>
    <mt-field label="年齡" :attr="{maxlength:3}" placeholder="請輸入年齡" type="number" v-model="age"></mt-field>
    <mt-button size="large" @click="signup">用戶註冊</mt-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        uname:'',upwd:"",age:"",
      }
    },
    methods: {
      signup(){
        console.log(1);
        //功能:驗證用戶輸入表單
        //1.創建正則表達式 用戶名和密碼 3~12位 字母數字
        var regu=/^[a-z0-9]{3,12}$/i;
        //2.創建正則表達式 年齡 2位 數字
        var rega=/^[0-9]{2}$/;
        //3.獲取用戶名
        var u=this.uname;
        //4.獲取密碼
        var p=this.upwd;
        //5.獲取年齡
        var a=this.age;
        console.log(u+":"+p+":"+a);
        //6.驗證用戶名，如果出錯交互級別需要高(以防使用者漏看)
        if(!regu.test(u)){
          this.$messagebox("錯誤！","用戶名格式不正確");//簡寫,標題可省略
          return;
        }
        //7.驗證密碼，如果出錯交互級別需要高(以防使用者漏看)
        if(!regu.test(p)){
          this.$messagebox("錯誤！","密碼格式不正確");//簡寫,標題可省略
          return;
        }
        //8.驗證年齡，如果出錯交互級別需要高(以防使用者漏看)
        if(!rega.test(a)){
          this.$messagebox("錯誤！","年齡格式不正確");//簡寫,標題可省略
          return;
        }
        //9.驗證成功 AJAX請求完成任務


        this.$toast(
        {
          message:"註冊成功", //顯示消息內容
          position:"middle",//顯示位置
          iconClass:"iconfont icon-chenggong"//顯示圖標(成功)
        })
      },
    }
  }
</script>
