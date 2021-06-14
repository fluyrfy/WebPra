var index={
  template:`<main>
  <my-header></my-header>
  <h2>這裡是內容</h2><h3>歡迎光臨{{uname}}的第一個SPA應用</h3>
  <ul>
    <li><router-link to="/details/1">點我查看1號商品詳情</router-link></li>
    <li><router-link to="/details/2">點我查看2號商品詳情</router-link></li>
    <li><router-link to="/details/3">點我查看3號商品詳情</router-link></li>
  </ul>
  </main>`,
  props:["uname"]
}
