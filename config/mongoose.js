const mongoose=require('mongoose');
//set strict query 
mongoose.set("strictQuery",false);
//connect
mongoose.connect('mongodb://localhost/buyume');
//got connection 
const db=mongoose.connection;
//handle err
db.on('error',function(){
    console.log("Error in connet with db");
})
//done
db.once('open',function(){
    console.log("successfully connet with db");
})

module.exports=db;