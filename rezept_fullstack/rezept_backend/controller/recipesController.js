var recipesModel = require('../models/recipes.model.js');

async function recipesController (req, res) {
    const id= req.params.id;
    const recipe = await recipesModel.findOne({_id: id });
    res.json(recipe);
};

module.exports = recipesController;