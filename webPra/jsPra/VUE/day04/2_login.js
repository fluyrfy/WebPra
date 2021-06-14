var login={
  template:`<main>用戶名：<input v-model="uname"><br>
  密碼：<input type="password" v-model="upwd"><br>
  <button type="" value="" @click="login">登入</button>
  </main>`,
  data() {
    return {
      uname:"FanFan",
      upwd:"123456",
    }
  },
  methods: {
    login(){
      if(this.uname=="FanFan"&&this.upwd=="123456"){
        alert("登入成功!稍後後返回首頁");
        setTimeout(() => {
          this.$router.push(`/index/${this.uname}`)
        }, 500);
      }else{
        alert("用戶名或密碼錯誤")
        this.uname="";
        this.upwd="";
      }
    }
  },
}
