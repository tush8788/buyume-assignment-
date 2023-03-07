const express=require('express');
const db=require('./config/mongoose')
const port=8000;

const app=express();

app.use(express.urlencoded({extended:true}));

app.use('/',require('./routes/index.js'));

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up on port :: ",port);
})