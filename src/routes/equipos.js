const router=require('express').Router();
const Equipo= require('../models/Equipo');
const Pais = require('../models/Pais');

router.get('/',async (req,res)=>{
    const equipos=await Equipo.findAll({
        include:{
            model:Pais
        }
    });

    res.json(equipos)
});


module.exports=router;