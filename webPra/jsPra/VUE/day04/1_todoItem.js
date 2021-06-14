// Vue.component("todo-item",{
//   template:`<li>1-吃飯<button type="">x</button></li>`
// }) 不能將小物件寫為全局組件，必須降級為子組件
var todoItem={
  template:`<li>{{i+1}}-{{task}}<button @click="del">x</button></li>`,
  props:["task","i","tasks"],
  methods: {
    del(){
      this.tasks.splice(this.i,1);
    }
  },
} //寫法為一般物件
