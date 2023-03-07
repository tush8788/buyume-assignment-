const express=require('express');
const db=require('./config/mongoose')
const port=8000;

const app=express();
//convet form data into json
app.use(express.urlencoded({extended:true}));
//handle req
app.use('/',require('./routes/index.js'));
//listen
app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up on port :: ",port);
})