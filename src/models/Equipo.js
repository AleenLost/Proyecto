const { DataTypes } = require('sequelize');
const sequelize=require('../db');
const Pais = require('./Pais');

const Equipo=sequelize.define("Equipos",
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,

        },
        nombre:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        id_pais:{
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    
    },{
        tableName:"Equipo"
    });
Pais.hasOne(Equipo,{as:'Equipo',foreignKey:'id_pais'});
Equipo.belongsTo(Pais,{foreignKey:'id_pais'});

  

module.exports=Equipo;

