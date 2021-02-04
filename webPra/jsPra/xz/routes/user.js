const { Console } = require('console');
const express=require('express');
const pool=require('../pool');
var router=express.Router();
router.post('/reg',function (req,res) {
    let obj=req.body;
    if (!obj.uname) {
        res.send({code:401,msg:'uname required'});        
        return;
    }
    if (!obj.upwd) {
        res.send({code:402,msg:'upwd required'});
        return;    
    }
    if (!obj.phone) {
        res.send({code:403,msg:'phone required'});
        return;    
    }
    if (!obj.email) {
        res.send({code:404,msg:'email required'});
        return;    
    }
    pool.query(
        `INSERT INTO xz_user SET ?`,[obj],
        function (err,result) {
            if(err) throw err;
            //console.log(result);
            if (result.affectedRows>0) {
                res.send({code:200,msg:'reg suc'});
            }
        });
      
});
router.post('/login',function (req,res) {
    let obj=req.body;
    if (!obj.uname) {
        res.send({code:401,msg:'uname required'});
    }
    if (!obj.upwd) {
        res.send({code:402,msg:'upwd required'});
    }
    pool.query(`SELECT * FROM xz_user WHERE uname=?
    AND upwd=?`,[obj.uname,obj.upwd],function (err,result) {
        if(err) throw err;
        console.log(result);
        if(result.length>0){
            res.send({code:200,msg:'login suc'});
        }else{
            res.send({code:201,msg:'uname or upwd error'});
        }
    });
    
});
router.get('/detail',function (req,res) {
    let obj=req.query;
    console.log(obj);
    if(!obj.uid){
        res.send({code:401,msg:'uid required'});
        return;
    }
    pool.query(`SELECT * FROM xz_user WHERE uid=?`,[obj.uid],
        function (err,result) {
            if (err) {
                throw err;      
            }
            res.send(result);
            console.log(result);            
        });
});
//修改用戶
router.post('/update',function (req,res) {
    let obj=req.body;
    //console.log(obj);
    let i=400;
    for (let key in obj) {
        // if (obj.hasOwnProperty(key)) {
        //     const element = obj[key];   
        // }
        i++;
        if (!obj[key]) {
            res.send({code:i,msg:key+' required'})
            return;
        }
    }
        let uid=obj.uid;
        delete obj.uid;
        //console.log(obj);
        pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,uid],
            function (err,result) {
                if(err) throw err;
                //console.log(result);
                if (result.affectedRows>0) {
                    res.send({code:200,msg:'update suc'});
                }
                else{
                    res.send({code:201,msg:'update error'});
                }
        });  
});
router.get('/list',function (req,res) {
    let obj=req.query;
    let count=obj.count;
    let pno = obj.pno;
    if(!count){
        count=2;
    }
    if(!pno){
        pno=1;
    }
    count=parseInt(count);
    pno=parseInt(pno);
    console.log(count,pno);
    let start=(pno-1)*count;
    // let i=400;
    // for(let key in obj){
    //     i++;
    //     if(!obj[key]){
    //         res.send({code:i,msg:key+' required'});
    //         return;
    //     }
    // }
    pool.query(`SELECT * FROM xz_user LIMIT
        ?,?`,[start,count],function (err,result) {
            if(err) throw err;
            res.send(result);
        });
});
router.get('/delete',function (req,res) {
    let obj=req.query;
    if(!obj.uid){
        res.send({code:401,msg:'uid required'});
        return;
    }
    pool.query(`DELETE FROM xz_user WHERE uid=?`,[obj.uid],
        function (err,result) {
            if(err) throw err;
            if(result.affectedRows>0){
                res.send({code:200,msg:'delete suc'});
            }
            else{
                res.send({code:201,msg:'delete err'});
            }
        });
});
module.exports=router;