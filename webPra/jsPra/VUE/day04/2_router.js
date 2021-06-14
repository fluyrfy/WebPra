var routes=[
  {path:"/",component:index},
  {path:"/index/:uname",component:index,props:true},
  {path:"/details/:lid",component:details,props:true},
  {path:"/login",component:login},
  {path:"/*", component:{template:`<main><h2 style="color:red; text-align:center;">404:Not Found</h2></main>`}}
];
var router=new VueRouter({
  routes
})
