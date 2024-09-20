const express = require('express');
const connectDB =require('./connection')
const student =require('./routes/student')
const path =require('path')
const app = express();

connectDB();

app.use(student)

app.set('view engine','ejs');
app.set('views',path.resolve('./views'))

app.listen(3000,(err)=>{
    if(err){
         console.log(err)
         }
    else{
        console.log("server running on port 3000");
    }
})