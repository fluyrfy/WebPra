const mysql=require('mysql');
let pool=mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'xz',
    connectionLimit:20
});
module.exports=pool;