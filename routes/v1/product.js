const express = require('express');
const router=express.Router();
const ProductController=require('../../controller/v1/product_controller');

router.get('/update',ProductController.updateProduct)

module.exports=router;