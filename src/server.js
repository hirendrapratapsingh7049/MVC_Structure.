
const express=require('express');
const { aminRouter } = require('./routes/admin/adminRoute');
const app=express();

require('dotenv').config();
let port=process.env.PORT;


app.use('/admin',aminRouter)

app.listen(port,()=>{

 console.log('server is running on port',port)
})