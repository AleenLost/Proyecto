const { DataTypes } = require('sequelize');
const sequelize=require('../db');
const Equipo = require('./Equipo');

const Pais=sequelize.define('Paises',
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        tableName:"Pais"
    }
);


module.exports=Pais;