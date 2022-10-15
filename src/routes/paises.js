const router=require('express').Router();
const Pais= require('../models/Pais');

router.get('/',async (req,res)=>{
    const paises=await Pais.findAll();
   res.json(paises)
});

module.exports=router;