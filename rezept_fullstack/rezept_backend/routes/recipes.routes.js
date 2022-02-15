var { Router } = require('express');
var recipesController = require("../controllers/recipesController.js");

const router = new Router();

router.get ("/recipes/:id", recipesController);

module.exports = router;