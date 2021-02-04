const express=require('express');
const userRouter=require('./user');
const productRouter=require('./product');
var app=express();
app.listen(8080);
app.use('/user',userRouter);
app.use('/product',productRouter);