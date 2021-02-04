const express=require('express');
var router=express.Router();
router.get('/list',function(req,res){
    res.send('用戶列表');
});
module.exports=router;