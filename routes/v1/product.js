const express = require('express');
const router=express.Router();
const ProductController=require('../../controller/v1/product_controller');
//hanle update req
router.post('/update',ProductController.updateProduct)

module.exports=router;