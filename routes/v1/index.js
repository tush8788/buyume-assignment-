const express = require('express');
const router=express.Router();
//send req to product 
router.use('/product',require('./product'));

module.exports=router;