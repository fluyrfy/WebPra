// Vue.component("todo-list",{
//   template:`<ul><todo-item></todo-item></ul>`
// })
var todoList={
  template:`<div><todo-item v-for="(task,i) of tasks" :key="i" :task="task" :i="i" :tasks="tasks"></todo-item></ul></div>`,
  props:["tasks"],
  components:{
    todoItem
  },
}
