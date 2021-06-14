Vue.component("my-header",{
  template:`<header>
    <h1 style="text-align:center;">這裡是頁首</h1>
    <ul>
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/login">登入</router-link>
      </li></li>
      <li></li>
    </ul><hr>
  </header>`
})//router-link自動翻譯成a href
