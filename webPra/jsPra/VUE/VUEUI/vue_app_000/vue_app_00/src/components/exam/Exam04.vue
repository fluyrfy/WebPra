<template>
  <div>
    <h1>Exam04.vue</h1>
    <!-- 開關組件 -->
    <mt-switch v-model="val2" @change="handle2">開關選項</mt-switch>
    <!-- 單選列表 -->
    <mt-radio title="單選列表" :options="['a','b','c']"
    v-model="val3" @change="handle3">
    </mt-radio>
    <mt-button @click="get3">獲取用戶選中值</mt-button>
    <mt-radio title="Crusaders Quest好玩嘛"  :options="options" v-model="val4">
    </mt-radio>
    <mt-button @click="get4">意見調查</mt-button>
    <!-- 複選列表 -->
    <mt-checklist title="複選框列表" v-model="val5" :options="['a','b','c']"></mt-checklist>
    <mt-button @click="get5">獲取值</mt-button>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        val2:true,
        val3:"",
        val4:"",
        options:[{label:"好玩",value:"玩家滿意"},//lable:網頁上顯示,value:實際值
                {label:"不好玩",value:"玩家不滿意"}],
        val5:[]
      }
    },
    methods: {
      handle2(){
        console.log(this.val2);
      },
      handle3(){
        console.log(this.val3);
      },
      get3(){
        console.log(this.val3);
      },
      get4(){
        console.log(this.val4);
      },
      get5(){
        console.log(this.val5);
      },
    },
  }
</script>
