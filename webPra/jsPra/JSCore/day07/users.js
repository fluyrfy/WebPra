//將來在企業項目中，都是將操作一種對象的所有函數，封裝在一個大的對象中
var user={
  signin:function () {
    console.log("登陸");
  },
  signout:function () {
    console.log("註銷");
  },
  signup:function () {
    console.log("註冊")
  },
  changePwd:function () {
    console.log("修改密碼")
  }
}
