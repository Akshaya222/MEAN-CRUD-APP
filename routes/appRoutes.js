var express=require('express');
var router=express.Router();
var Contact=require('../models/contactSchema');

router.post('/create',(req,res,next)=>{
    var newContact=new Contact({
      name:req.body.name,
      phone:req.body.phone  
    });
    newContact.save((err,contact)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        else{
            res.status(200).json({msg:contact})
        }
    })
});
router.get('/read',(req,res,next)=>{
    Contact.find({},(err,contacts)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        else{
            res.status(200).json({msg:contacts});
        }
    })
});

router.put('/update',(req,res,next)=>{
    Contact.findById(req.body._id,(err,contact)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        else{
            contact.name=req.body.name;
            contact.phone=req.body.phone;
            contact.save((err,contact)=>{
                if(err)
                {
                    res.status(500).json({errmsg:err});
                }else{
                    res.status(200).json({msg:contact})
                }
                })
        }
    })
});
router.delete('/delete/:id',(req,res,next)=>{
    Contact.findOneAndRemove({_id:req.params.id},(err,contact)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
    })
    res.status(200).json({msg:'Delete request is working'});
});

module.exports=router;