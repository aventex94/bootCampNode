const express = require('express');
const app = express();
//const userRouter = require('./app/routes/userRoutes') 
const sequelize = require('sequelize');
const models = require('./models');



app.listen(3002,()=>{
    models.sequelize.sync({force:true});
    console.log("Servidor Corriendo");
});