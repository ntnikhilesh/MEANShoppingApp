var express=require('express');
var router=express.Router();

const Item=require('../model/shoppingItem')

//retreiving data from DB
router.get('/get_items',(req,res,next)=>{
   
    Item.find(function(err,items){
        if(err){
            res.json(err);
        }else{
            res.json(items);
        }
    })
})

//inserting new data
router.post('/add_items',(req,res,next)=>{
    let newShoppingItem=new Item({
        itemName:req.body.itemName,
        itemQuantity:req.body.itemQuantity,
        itemBought:req.body.itemBought
    });
    newShoppingItem.save((err,item)=>{
        if(err){
            res.json(err);
        }else{
            res.json({msg:'Item has been added successfully'});
        }
    });
});

//updating the data
router.put('/put_route',(req,res,next)=>{
    //to do later
})

//delete the data
router.get('/delete_route',(req,res,next)=>{
     //to do later
})

module.exports=router;