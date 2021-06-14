// Vue.component("todo-item",{
//   template:`<li>1-吃飯<button type="">x</button></li>`
// }) 不能將小物件寫為全局組件，必須降級為子組件
var todoItem={
  template:`<ol><li>吃飯<button type="">x</button></li><li>睡覺<button type="">x</button></li><li>玩克魯<button type="">x</button></li></ol>`
} //寫法為一般物件
