// for(var i=2000,sum=0;i<=2100;i++){
//     if(i%4===0 && i%100!==0 || i%400===0){
//         sum++;
//         console.log(i);
//     }
//     if(sum===10){
//         break;
//     }
// }

// for(var i=1,sum=0;i<=100;i++){
//     sum+=i;
//     if(sum>4000){
//         break;
//         console.log(sum);
        
//     }
// }

// for(var i=1;i<=9;i++){
//     for(var j=1,str='';j<=i;j++){
//         str+=i+'*'+j+'='+i*j+' ';
//     }
//     console.log(str);
// }

// function sum(year1,year2){
//     for(var i=year1,yearSum=0;i<=year2;i++){
//         if(i%4===0 && i%100!==0 || i%400===0){
//             yearSum++;
//         }         
//     }
//     console.log(yearSum);
// }
    
// sum(2000,2100);
// sum(1949,2019);

// function add(n1,n2){
//     console.log(n1,n2);
// }

// add();

// function b(m,n,o){
//     if(m>n&&m>o){
//         return m;
//     }
//     elseif{
        
//     }
        
// }

// console.log(b(99,55));

// function getStatus(n){
//     switch(n){
//         case 1:
//             return '待付款';
//         case 2:
//             return '待發貨';
//         case 3:
//             return '運輸中';
//         case 4:
//             return '已簽收';
//         case 5:
//             return '無法追蹤';
//     }
// }
// console.log(getStatus(3));

// function year(n){
//     if(n%4===0 && n%100!==0 || n%400===0){
//         return true;
//     }
//         return false;
// }
// function getDays(n){
//     if(year(n)){
//     return 366;
//     }
//     return 365;
// }
// console.log(getDays(2000));

// function calc(n){
//     for(var i=1,sum=0;i<=n;i++){
//         for(var j=i,mul=1;j>=1;j--){
//             mul*=j;
            
//         }
//         sum+=mul;
//     }
//     return sum;
// }
// console.log(calc(5));

// function getJC(n){
//     for(var i=1,mul=1;i<=n;i++){
//         mul*=i;
//     }
//     return mul;
// }
// function getSum(n){
//     for(var i=1,sum=0;i<=n;i++){
//         sum+=getJC(i);
//     }
//     return sum;
// }
// console.log(getSum(5));

// function fn(){
//     console.log(b);
//     var b=2;
// }
// fn();

// function test(){
//     var i=1;
//     // console.log(i);
//     return i;
// }
// console.log(typeof test());
// console.log(test()+1);

// function fn3(m){
//     console.log(m);
//     m+=3;
// }
// fn3(5);

// function fn4(){
//     var a=b=c=2;
// }
// fn4();
// console.log(c);

// function fn(){
//     a=2;
// }
// fn();
// console.log(a);

// function fib(n){
//     for(var i=1,sum=0;i<=n,i++){
//         sum=i-1+(i-2);
//     }
//     return sum;
// }
// console.log(fib(20));

// var a=1;
// if(a==1){
//     console.log('right');
// }
// else if(a===2){
//     console.log('test');
// }

// var a=1;
// var b=2;
// var c=a;
// a=b;
// b=c;
// console.log(a,b);

// function fib(n){
//     var n1=1,n2=1;
//     for(var i=3;i<=n;i++){
//         var c=n1;
//         n1=n2;
//         n2=c+n2;
//     }
//     console.log(n2);
// }
// fib(20);

// var i=1;
// var sum=0;
// function getSum(n){
//     sum+=i;
//     i++;
//     if(i>n){
//         return ;
//     }
//     getSum(n);
// }
// getSum(100);
// console.log(sum);

// function fib(n){
//     if(n===1 || n===2){
//         return 1;
//     }
//     return fib(n-2)+fib(n-1);
// }

// console.log(fib(5));

// var calc=function(a,b){
//     for(var i=a,sum=0;i<=b;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(calc(3,10));

// (function(){
//     var num=4;
//     console.log(num);
// })
// ();

// function fn(a,b){
//     a();
//     b();
// }
// fn(function(){
//     console.log('我是函數A');
// },
//     function(){
//         console.log('我是函數B');
//     }
// );

// var str='我';
// var str2=encodeURI(str);
// console.log(str2);

// var emp={
//     eid:1,
//     ename:'tom',
//     salary:8000,
//     birthday:'1999-7-3'
// };
// console.log(emp);

// var phone={
//     color:'黑色',
//     size:'5.9',
//     brand:'華為'
// };

// var book={
//     id='1',
//     title='Story of my life',
//     author='Fan',
//     price=100
// };
// book.price=200;
// console.log(book.author);
// book.publish="帆帆";

// var note=new Object();
// note.id=1106137211;
// note.title='new';
// note.price=3999;
// note['spec']='遊戲本';
// console.log(note);

// var phone={
//     color:'黑色',
//     size:'5.9',
//     brand:'華為'
// };
// for(var key in phone){
//     console.log(key);
// }

// var score={
//     chinese:87,
//     math:95,
//     english:100,
//     sport:88
// };
// var sum=0;
// for(var allscore in score){
//     console.log(allscore,score[allscore]);
//     sum+=score[allscore];
// }
// console.log(sum);

// var obj={
//     age1:18,
//     age2:60,
//     age3:36,
//     age4:55
// }
// var sum=0,time=0;
// for(var key in obj){
//     sum+=obj[key];
//     time++;
//     if(obj[key]>=20){
//         console.log(obj[key]);
//     }
// }
// console.log(sum/time);

// var a={
//     b:1,
//     c:2,
//     d:3
// }
// for(key in a){
//     console.log(a[]);
// }

// var person={
//     ename:'Sarocha',
//     sex:'女',
//     age:22,
//     say:function(BF){
//         console.log('Hello,my boyfriend is '+BF);
//     }
// }
// if(!('salary' in person)){
//      person.salary=8000;
// }
// person.say('Fan');

// var circle={
//     radius:4,
//     pi:3.14,
//     perimeter:function(){
//         console.log(this.radius*2*this.pi);
//     },
//     area:function(){
//         console.log(this.radius*this.radius*this.pi);
//     }
// }
// circle.perimeter();
// circle.area();

// var commodity=['飲料','零食','生活用品'];
// var city=['台北','高雄','桃園'];
// city[0]="屏東";
// city[3]="綠島";
// city[4]='金門';
// console.log(commodity,city);

// var book=new Array('小說','歷史','國文','寓言故事');
// console.log(book);
// var basketball=new Array(5);
// basketball[0]='後衛';
// basketball[1]='中鋒';
// basketball[2]='前鋒';
// console.log(basketball);

// var coun=new Array();
// coun[coun.length]='台灣';
// coun[coun.length]='美國';
// coun[coun.length]='中國';
// coun[coun.length]='印度';
// coun[coun.length]='日本';
// console.log(coun.length,coun);

// var emp=[];
// emp['ename']='小然';
// emp['sex']='男';
// for(var key in emp){
//     console.log(emp[key]);
// }

// var score=[98,100,50,65,77];
// var sum=0,time=0;
// for(var key in score){
//     console.log(score[key])
//     sum+=score[key];
// }
// console.log(sum,sum/score.length);
// for(var i=0;i<score.length;i++){
//     console.log(score[i]);
// }

// var country=["美國",'中國','日本','加拿大','中國','台灣'];
// var time=0;
// for(var i=0;i<country.length;i++){
//     if(country[i]==='中國'){
//         time++;
//         country[i]='China';
//     }
//     console.log(country[i]);
// }
// console.log(time);

// var digital=[17,22,16,88,87,7,3];

// for(var i=0;i<digital.length;i++){
//     var max;
//     if(digital[i]<digital[i+1]){
//         max=digital[i+1];
//     }
//     //else{
//     //     max=digital[i];
//     // }
// }
// console.log(max);

// function getAvg(arr){
//     var sum=0;
//     for(var i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(getAvg([27,39,18,51]));

// var alphabet=['a','b','c','d','e','f','g'];
// cd=alphabet.slice(2,4);
// f=alphabet.slice(-2,-1);
// b=alphabet.slice(1,2);
// console.log(cd.concat(f,b));
// console.log(typeof cd);

// var arr=['a','b','c','d'];
// var arr2=[];
// for(var i=0;i<arr.length;i++){
//     arr2[i]=arr[arr.length-1-i];
// }
// console.log(arr2);

// var arr=[23,9,78,6,45];
// for(var i=1;i<arr.length;i++){
//     for(var j=0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             var tmp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=tmp;
//         }
//     }
// }
// console.log(arr);

// var arr=[23,9,78,6,45];
// // console.log(arr.sort());
// console.log(arr.sort(function(a,b){
//     return a-b;
// }))

// var arr=['html','css','js'];
// console.log(arr.push('node.js'));
// console.log(arr);

// var emp=[
//     {eid:1,ename:'tom',salary:8000},
//     {eid:2,ename:'king',salary:10000}
// ];
// var person={
//     name:'小然',
//     age:88,
//     love:['抽菸','喝酒']
//}

// var str1=new String('a');
// console.log(str1,typeof str1);


// console.log('welcome to chi\\na')

// var str='Frank@gmail.com';
// if(str.indexOf('@')===-1){
//     console.log('非法的郵箱');
// }
// else{
//     console.log('合法的郵箱');
// }

// var code='eCoT';
// while(true){
//     var str=prompt('input checkcode');
//     if(str.toUpperCase()===code.toUpperCase()){
//         break;
//     }
// }

// var str='javascript';
// console.log(str.slice(-3,-1));

// var email='tom123@163.com';
// var index=email.indexOf('@');
// console.log(email.slice(0,index));
// console.log(email.slice(index+1));

// var str='110236198011112579';
// var year=str.substr(6,4);
// var month=str.substr(10,2);
// var day=str.substr(12,2);
// var sex=str.substr(-2,1);
// var gender;
// if(sex%2===1){
//     gender='男';
// }else{
//     gender='女';
// }
// console.log('小然的生日為'+year+'年'+month+'月'+day+'日 性別 '+gender);

// var a='welCome';
// var fir=a.substring(0,1);
// var other=a.substring(1);
// console.log(fir.toUpperCase()+other.toLowerCase());

// var email="tom123@163.com";
// var arr=email.split('@');
// console.log(arr);

// var str='hOw arE yOu';
// var arr=str.split(' ');
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     var first=arr[i].substr(0,1).toUpperCase();
//     var other=arr[i].substr(1).toLowerCase();
//     arr[i]=first+other;
// }
// console.log(arr.join(' '));

// var arr=['A','B','C','D','E','F','G','1','2','3','4'];

// var arr2=[];
// for(var i=0;i<4;i++){
//     var num=Math.floor(Math.random()*arr.length);
//     arr2.push(arr[num]);
// }
// console.log(arr2);

// var d=new Date();
// var day=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
// console.log( '今天是'+ d.getFullYear()+'年'+
// d.getMonth()+'月'+d.getUTCDate()+'日'+ day[d.getDate()]+ d.getHours()+':'+d.getMinutes());


// var target=new Date('2020/12/25');
// var now=new Date();
// // var x=d.getTime()-n.getTime();
// var d=target-now;
// d=Math.floor(d/1000);
// var day=Math.floor(d/(24*60*60));
// var hour=d%(24*60*60);
// hour=Math.floor(hour/3600);
// var minute=d%3600;
// minute=Math.floor(minute/60);
// var second=d%60;
// console.log(
//     '距離今年聖誕節還有'+
//     day+'天'+
//     hour+'小時'+
//     minute+'分'+
//     second+'秒');

// var d1=new Date('2019/6/22');
// //到職時間
// var d2=new Date(d1);
// //計算三年後
// d2.setFullYear(d2.getFullYear()+3);
// //續簽時間
// var d3=new Date(d2);
// //計算提前一個月
// d3.setMonth(d3.getMonth()-1);
// var whday=d3.getDay();
// console.log(whday);
// if(whday===6){
//     //提前一天
//     d3.setDate(d3.getDate()-1);
// }else if(whday===0){
//     d3.setDate(d3.getDate()-2);
// }
// console.log(
//     '入職時間:'+d1.toLocaleDateString());
// console.log(
//     '到職時間:'+d2.toLocaleDateString());
// console.log(
//     '簽約時間:'+d3.toLocaleDateString());

// var num1=2;
// var num2=Number(true);
// var num3=new Number(null);
// console.log(num3,typeof num3,typeof num2);
// var num4=0.1+0.2;
// console.log(num4.toFixed(2));

// Math.floor(Math.random()*16)+1

// var a=1;
// function add(a){
//    console.log(a+2);
//    var a=3;
// }  
// add(a)

// var num=1;
// var result=num-- + --num + ++num +num++ +num++;
// console.log(result);

// var d1=new Date();
// var d2=new Date('2020/10/10 00:00:00');
// var d=d2-d1;
// d=Math.floor(d/1000);
// var day=d/(24*60*60);
// day=Math.floor(day);
// var hours=d%(24*60*60);
// hours=Math.floor(hours/(60*60));
// var minutes=d%(60*60);
// minutes=Math.floor(minutes/60);
// var seconds=d%60;
// seconds=Math.floor(seconds);
// console.log('目前距離2020國慶日還剩下'+
//    day+'天 '+
//    hours+'小時 '+
//    minutes+'分鐘 '+
//    seconds+'秒');

//塊級作用域
// {
//    let num=1;
// }
// console.log(num);

// let sum=0;
// for(let i=1;i<=100;i++){
//    sum+=i;
// }
// console.log(sum);

// var arr=[23,9,45,78,6];
// // console.log( arr.sort((a,b)=>{
// //    return a-b;
// // }) );
// console.log( arr.sort((a,b)=>a-b));

// var year=2019;
// var month=6;
// var date=20;
// var day='星期四';
// var hour=11;
// console.log(`
//     今天是${year}年${month}月${day}日
//     ${day} ${hour>12?'下午':'上午'}    
// `);

// var person={
//     name:'Frank',
//     sex:1,
//     age:22
// };
// console.log(`我的名字是${person.name},性別是${person.sex===1?'男':'女'}
// 年齡${person.age}歲`);

// var a=1;
// function fn(){
//     return 2;
// }
// console.log(fn())

// var a=1;
// console.log( window.a );
// function fn(){
//     return 2;
// }
// console.log(window.fn() );

// console.time('for');
// for(let i=1,sum=0;i<1000000;i++){
//     sum+=i;
// }
// console.timeEnd('for');

// console.time('while');
// var i=1,sum=0;
// while(i<=1000000){
//     sum+=i;
//     i++;
// }
// console.timeEnd('while');

// console.time('do-while');
// var i=1,sum=0;
// do{
//     sum+=i;
//     i++;
// }
// while(i<=1000000);
// console.timeEnd('do-while');

// var buf=Buffer.alloc(5,'abcde');
// console.log(buf);
// console.log( String(buf) );

// const querystring=require('querystring');
// var str='keyword=手機&enc=utf8';
// var obj=querystring.parse(str);
// console.log(obj);
// var obj2=querystring.stringify(obj);
// console.log(obj2);

// const querystring=require('querystring');
// var str='lid=5&pname=apple';
// var obj=querystring.parse(str);
// console.log(obj.lid);

// const url=require('url');
// var str='http://www.tmooc.cn:80/detail.html?lid=5';
// var obj=url.parse(str);
// console.log(obj);
// var obj2={
//     protocol:'https',
//     hostname:'www.tmooc.cn',
//     port:'80',
//     pathname:'detail.html',
//     query:{
//         lid:5,
//         pname:'dell'
//     }
// }
// var str2=url.format(obj2);
// console.log(str2);

// var timer=setTimeout(()=>{
//     console.log('炸彈爆炸了');
// },3000 );

// clearTimeout(timer);

// var timer=setInterval(()=>{
//     console.log('喝水時間到');
// },5000);
// //clearInterval(timer);

// setImmediate(()=>{
//     console.log(1);
// });

// const fs=require('fs');
// fs.stat('01.js',function(err,stats){
//     if(err) throw err;
//     console.log(stats);    
// });

// const url=require('url');
// var str='https://tmooc.cn:80/course.html?cid=17&cname=web';
// var obj=url.parse(str);
// console.log(obj);
// var str2=obj.query;
// console.log(str2);
// const querystring=require('querystring');
// var obj2 = querystring.parse(str2);
// console.log(obj2);

// const fs=require('fs');
// fs.stat('./01.js',function(err,stats){
//     if(err) throw err;
//     console.log(stats);
// });
// var stat2=fs.statSync('01.js');
// console.log(stat2);

// const fs=require('fs');
// fs.mkdir('mydir',function(err){
//     if(err) throw err;
// });
// var dir=fs.mkdirSync('mydir2');
// fs.rmdir('mydir',function(err){
//     if(err) throw err;
// })
// fs.rmdirSync('mydir2');
// fs.readdir('mydir',function(err,result){
//     if(err) throw err;
//     console.log(result);
// })
// var read2=fs.readdirSync('mydir');
// console.log(read2);
// fs.writeFile('test.txt','test',function(err){
//     if(err) throw err;
//     console.log('文件寫入成功');
// });
// fs.writeFileSync
// fs.appendFile('02.html','hello\n',function(err){
//     if(err) throw err;
//     console.log('寫入網頁成功');
// })
// var classname=['chinese','math','history'];
// for(var i=0;i<classname.length;i++){
//     fs.appendFileSync('class.html',classname[i]+',');
// }
// fs.readFile('class.html',function(err,data){
//     if(err) throw err;
//     console.log(data.toString());
// });
// var data=fs.readFileSync('class.html');
// console.log(data.toString());
// fs.unlink('test.txt',function(err){
//     if(err) throw err;
//     console.log('文件刪除成功');
// });
// fs.unlinkSync('class.html');
// var result=fs.existsSync('02.html');
// if(result){
//     fs.unlinkSync('02.html');
// }
// console.log(result);
// console.log('end');
// const fs=require('fs');
// var readStream=fs.createReadStream('01.js');
// readStream.setEncoding('utf8');
// readStream.on('data',function(chunk){
//     console.log(chunk);
// });
// readStream.on('end',function(){
//     console.log('讀取結束');    
// })
// var readStream=fs.createReadStream('01.js');
// var writeStream=fs.createWriteStream('01data.txt');
// readStream.pipe(writeStream);
// const http=require('http');
// http.get('http://www.tmooc.cn',function(res){
//     console.log(res.statusCode);
//     res.on('data',function(chunk){
//         console.log(chunk.toString());
//     })
// });
// const http=require('http');
// var app=http.createServer();
// app.listen(8080);
// app.on('request',function(req,res){
//     // console.log(req.url,req.method);
//     // console.log(req.headers);
//     // res.write('this is homepage');
//     res.writeHead(302,{
//         Location:'http://www.tmooc.cn'
//     })
//     res.end();
// });
// const http=require('http');
// const fs=require('fs');
// const zlib=require('zlib');//壓縮
// var app=http.createServer();
// app.listen(8080);
// app.on('request',function(req,res){
//     if(req.url==='/login'){
//         res.write('this is login page');
//     }else if(req.url==='/reg'){
//         res.write('this is register page');
//     }else if(req.url==='/study'){
//         res.writeHead(302,{
//             Location:'https://www.southlabblog.com/'
//         })
//     }else if(req.url==='/index'){
//         res.writeHead(200,{
//             'Content-Type':'text/html',
//             'Content-Encoding':'gzip'
//         })
//         // var data=fs.readFileSync('tmooc.html');
//         // // console.log(data.toString());
//         // res.write( data.toString() );
//         var gzip=zlib.createGzip();
//         fs.createReadStream('tmooc.html').pipe(gzip)
//         .pipe(res);

//     }
    
//     // res.end();
// });

// const express=require('express');
// var app=express();
// app.listen(8080);
// app.get('/login',function(req,res){
//     res.send('測試Express');
// });
// app.get('/reg',function(req,res){
//     res.send(`
//         請註冊<br>
//         這是註冊的頁面
//     `);
//     // res.send('註冊第二行');
// })
// app.get('/study',function(req,res){
//     // res.send('tmooc首頁');
//     res.sendFile(__dirname+'/southlab.html');
// })
// app.get('/index',function(req,res){
//     res.redirect('https://www.southlabblog.com/');
// })
// app.get('/',function(req,res){
//     res.redirect('/study');
// })
// app.get('/detail',function(req,res){
//     // console.log(req.method);
//     // console.log(req.headers);
//     console.log(req.query);//查詢數據字符串
//     res.send(`工作室詳情`);
// })
// app.get('/shopping/:price',function(req,res){
//     console.log( req.params);
//     res.send('購物車');
// });
// app.get('/admin/:uname/:upwd',function(req,res){
//     res.send(`歡迎管理者${req.params.uname}`);
// });

// const express=require('express');
// const querystring=require('querystring');
// var app=express();
// app.listen(8080);
// app.get('/login',function(req,res){
//     res.sendFile(__dirname+'/login.html');
// });
// app.post('/mylogin',function(req,res){
//     req.on('data',function(mydata){
//         //console.log(mydata.toString());
//         var str=mydata.toString();
//         var obj=querystring.parse(str);
//         console.log(obj);
//     })
//     res.send('登入成功');
// });
// app.get('/reg',function(req,res){
//     res.sendFile(__dirname+'/reg.html');
// })
// app.post('/myreg',function(req,res){
//     res.send('註冊成功，您的手機號碼: '+req.query.phone)
// })

// const express=require('express');
// const userRouter=require('./user');
// const productRouter=require('./product');
// var app=express();
// app.listen(8080);
// app.use('/user',userRouter);
// app.use('/product',productRouter);

// const express=require('express');
// var app=express();
// app.listen();
// app.use('/reg',function(req,res,next){
//     // console.log('驗證是否為空');
//     // res.send('用戶名不可為空');
//     next();
// });
// app.use('/reg',function(req,res,next){
//     console.log('驗證用戶名是否重複');
//     next();
// });
// app.get('/reg',function(req,res){
//     res.send('註冊成功');
// });

// const express=require('express');
// const querystring=require('querystring');
// const bodyParser=require('body-parser');
// var app=express();
// app.listen(8080);
// app.use( express.static('public') );
// app.use( bodyParser.urlencoded({
//     extended:false,
// }) );
// app.post('/mylogin',function(req,res){
//     // req.on('data',function(mydata){
//     //     console.log(mydata.toString());
//     //     var obj=querystring.parse(mydata.toString());
//     //     console.log(obj);
//     // });
//     console.log(req.body);
//     res.send('登入成功');
// });

// const { connect } = require('http2');
// const mysql=require('mysql');
// let connection=mysql.createConnection(
//     {
//         host:'localhost',
//         port:3306,
//         user:'root',
//         password:'',
//         database:'jslearn'
//     }
// );
// connection.connect();
//刪除、修改、插入 affectedRows > 0,執行成功
// connection.query('DELETE FROM emp WHERE eid=2',
//     function (err,result) {
//         if (err) {
//             throw err;
//         }
//         console.log(result);
//     }
// );
// connection.query(
//     'UPDATE emp SET sex=1,age=55 WHERE eid=1',
//     function (err,result) {
//         if(err) throw err;
//         console.log(result);
//     });
// connection.query('SELECT * FROM emp',
//     function (err,result) {
//         if(err) throw err;
//         console.log(result);
//     });
// connection.query(
//     'INSERT INTO emp VALUES(NULL,"Frank",1,21)',
//     function (err,result) {
//         if(err) throw err;
//         console.log(result);
//     });
//使用佔位符過濾
// connection.query(`INSERT INTO emp
//     VALUES(?,?,?,?)`,[null,'Miya',0,27],
//     function (err,result) {
//         if(err) throw err;
//         console.log(result);
//     });
// let emp = {
//     ename:'Trump',
//     age:65,
//     sex:1
// }
// connection.query(
//     `INSERT INTO emp SET ?`,[emp],
//     function (err,result) {
//         if(err) throw err;
//         console.log(result);
//     }
// );
// connection.end();
//連接池連接
// const mysql=require('mysql');
// let pool=mysql.createPool({
//     host:'localhost',
//     port:'3306',
//     user:'root',
//     password:'',
//     database:'jslearn',
//     connectionLimit:20 //設置連接池大小
// });
// pool.query(`SELECT * FROM emp`,
//     function (err,result) {
//         if(err) throw err;
//         console.log(result);
//     });
// pool.query(
//     `DELETE FROM emp WHERE eid=?`,[5],
//     function (err,result) {
//         if(err) throw err; 
//         console.log(result);
//     }
// );
