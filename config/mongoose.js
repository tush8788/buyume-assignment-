const mongoose=require('mongoose');

mongoose.set("strictQuery",false);

mongoose.connect('mongodb://localhost/buyume');

const db=mongoose.connection;

db.on('error',function(){
    console.log("Error in connet with db");
})

db.once('open',function(){
    console.log("successfully connet with db");
})

module.exports=db;