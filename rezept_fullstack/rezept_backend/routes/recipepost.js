
const { Router } = require('express');
const {  createRecipe } = require('../controllers/controlls.js');

const reciperouter = new Router();


reciperouter.post('/add', createRecipe)

module.exports = reciperouter