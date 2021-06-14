Vue.component("todo",{
  template:`<div><h1>待辦事項列表</h1>
  <todo-add :tasks="tasks"></todo-add>
  <todo-list :tasks="tasks"></todo-list>
  </div>`,
  data() {
    return {
      tasks:['吃飯','睡覺','玩克魯']
    }
  },
  //為父組件添加components:
  components:{
    //子組件對象名
    todoAdd,todoList
    //Vue會自動轉換成標籤名
    //'todoAdd:todoAdd'
  }
})
