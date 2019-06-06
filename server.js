const express = require('express');
const app = express();
const userRouter = require('./app/routes/userRoutes') 
app.use(userRouter);
app.listen(3002,()=>{
    console.log("Servidor Corriendo");
});