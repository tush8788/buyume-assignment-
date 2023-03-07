const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
    qty:{
        type:Number,
        required:true,
        default:1
    }
});

const Product=mongoose.model("Product",productSchema);

module.exports=Product;