const express = require('express');
const {getAllRecipes, recipeUpdate, getRecipeById, getRecipeByCategory, deleteRecipe, createRecipe, besteFunfRezepte} = require('../controllers/recipe.controller.js');
const router = express.Router();


router.route('/recipe')
    .get(getAllRecipes)
    .post(createRecipe);

router.route('/recipe/best')
    .get(besteFunfRezepte)

router.route('/recipe/:id')
    .get(getRecipeById)
    .delete(deleteRecipe)
    .put(recipeUpdate)

router.route('/recipe/category/:category')
    .get(getRecipeByCategory)


module.exports = router;