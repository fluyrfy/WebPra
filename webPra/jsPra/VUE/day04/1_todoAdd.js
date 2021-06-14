// Vue.component("todo-add",{
//   template:`<div>
//   <input type="" name="" value=""><button type="">+</button>
// </div>`
// })

var todoAdd={
  template:`<div><input v-model="task"><button type="" @click="add">+</button></div>`,
  data() {
    return {
      task:"",
    }
  },
  props:["tasks"],
  methods: {
    add(){
      this.tasks.push(this.task);
      this.task="";
    }
  }
}
