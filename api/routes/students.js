const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
 
       
        res.status(200).json({
            msg:'this is get request'
        })
    })


    router.post('/',(req,res,next)=>{
 
       
        res.status(200).json({
            msg:'this is post request'
        })
    })




module.exports= router;