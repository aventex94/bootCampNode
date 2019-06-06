const express = require('express');
const userRoutes = express.Router();
const userController = require('../controller/userController')

userRoutes.get('/user',userController.v1.getAll);

module.exports = userRoutes;