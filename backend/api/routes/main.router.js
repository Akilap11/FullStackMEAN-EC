var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');

//HTTP verbs: POST,GET,PUT,DELETE

//post /api/providers
router.post('/providers', mainController.create);

//get /api/providers
router.get('/providers', mainController.readAll);

//Get one /api/providers/123
router.get('/providers/:id', mainController.readOne);

//Put /api/providers/123
router.put('/providers/:id', mainController.update);

//Delete one /api/providers/123
router.delete('/providers/:id', mainController.deleteOne);

//Delete all providers /api/providers
router.delete('/providers', mainController.deleteAll);

module.exports=router;







