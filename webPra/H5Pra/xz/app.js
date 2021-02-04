const express=require('express');
const userRouter=require('./routes/user.js');
const demo=require('./routes/demo.js');
const pro=require('./routes/pro');
const mysql=require('mysql');
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);
app.use( express.static('public') );
app.use( express.static('myajax') );
app.use( express.static('mypro') );
// var pool=mysql.createPool({
//     host:'localhost',
//     port:'3306',
//     user:'root',
//     password:'',
//     database:'jslearn',
//     connectionLimit:20
// });
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use('/user', userRouter);
app.use('/demo', demo);
app.use('/pro',pro);
// app.get('/add',function (req,res) {
//     var obj=req.query;
//     pool.query(`
//         INSERT INTO dept SET ?
//     `,[obj],function (err,result) {
//         if(err) throw err;
//         console.log(result);
//         if(result.affectedRows>0){
//             res.send('註冊成功');
//         }
//     })
// });
