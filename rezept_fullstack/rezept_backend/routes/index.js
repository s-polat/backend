var express = require('express');
const {getAllRecipes} = require('../controllers/recipe.controller');
var router = express.Router();

/* GET home page. */
router.get('/', getAllRecipes);


module.exports = router;
