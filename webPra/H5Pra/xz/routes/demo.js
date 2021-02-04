const express=require('express');
const pool=require('../pool');
var router=express.Router();
router.get('/ajaxDemo',function (req,res) {
  res.send('我的第一個ajax程序');
});
router.get('/myajax',function (req,res) {
  res.send('我又敲了一遍');
})
router.get('/get_login',(req,res)=>{
  let $uname=req.query.uname;
  let $upwd=req.query.upwd;
  if (!$uname) {
    res.send('用戶名不存在');
    return;
  }
  if (!$upwd) {
    res.send('密碼不存在');
    return;
  }
  let sql=`select * from xz_user where uname=?
    and upwd=?`;
  pool.query(sql,[$uname,$upwd],(err,result)=>
  {
    if(result.length>0){
      res.send('1');
    }
    else{
      res.send('0');
    }
  })
});
// router.get('login/:uname&:upwd',(req,res)=>{
//   let $uname=req.params.uname;
//   let $upwd=req.params.upwd;
//   console.log(`${$uname}...${upwd}`)
// });
router.get('/login/:uname&:upwd',(req,res)=>{
  let $uname=req.params.uname;
  let $upwd=req.params.upwd;
  console.log($uname+'...'+$upwd);
});
router.post('/postLogin',(req,res)=>{
  let $uname=req.body.uname;
  let $upwd=req.body.upwd;
  if(!$uname){
    res.send('用戶名為空');
    return;
  }
  if(!upwd){
    res.send('用戶名為空');
    return;
  }
  let sql=`select * from xz_user where uname=? and upwd=?`;
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(result.length>0){
      res.send('1');
    }
    else{
      res.send('0');
    }
  });
});
router.get('/userList',(req,res)=>{
  let sql='select * from xz_user';
  pool.query(sql,(err,result)=>{
    if (err) {
      throw err;
    }else{
      res.send(result);
    }
  });
});
module.exports=router;
