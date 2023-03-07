const express = require('express');
const router=express.Router();
//send req into v1 
router.use('/v1',require('./v1/index'))

module.exports=router;