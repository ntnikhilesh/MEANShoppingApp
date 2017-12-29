var express=require('express');
var router=express.Router();

//retreiving data from DB
router.get('/testing_get_route',(req,res,next)=>{
    res.send('get route tested');
})

module.exports=router;