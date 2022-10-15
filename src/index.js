const express=require('express');
const { PORT } = require('./config');
const app=express();

app.get('/',async(req,res)=>{
    const saludo='hola mundo'
    res.json(saludo);
});


//app.use('/equipos',require('./routes/equipos'));
app.use('/paises',require('./routes/paises'));


app.listen(PORT);
console.log('Servidor en el puerto',PORT);
