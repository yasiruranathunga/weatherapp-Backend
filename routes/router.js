const express = require('express');
var router = express.Router();

const userController = require('../controllers/userManagementControllers/userController')

//User Management Routers
router.post('/user_um', userController.addUser);


router.post('/user_validate', userController.login);


module.exports = router