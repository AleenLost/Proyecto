const {Sequelize} =require('sequelize');
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = require('./config');

const sequelize=new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:   DB_HOST,
    dialect:"mysql",
    pool: {
        max: 100,
        min: 0,
        idle: 200000,
        acquire: 1000000,
      },
    define:{
        timestamps:false
    }
});

/*(async()=>{
    try {
    await sequelize.authenticate();
    await sequelize.sync();
    
    console.log('Conectado a base de datos')
    } catch (error) {
        console.log('Fallo en la conexion')
    }
    
})()*/

module.exports=sequelize;