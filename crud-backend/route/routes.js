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
router.put('/update_item/:id',(req,res,next)=>{
   Item.findOneAndUpdate({_id:req.params.id},{
       $set:{
        itemName:req.body.itemName,
        itemQuantity:req.body.itemQuantity,
        itemBought:req.body.itemBought
       }
   },
   function(err,result){
    if(err){
        res.json(err);
    }else{
        res.json({msg:'Item has been updated  successfully'});
    }
   }
)
})

//delete the data
router.delete('/delete_item/:id',(req,res,next)=>{
     Item.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }else{
            res.json({msg:'Item has been deleted  successfully',
            result:result});
        } 
     })
})

module.exports=router;