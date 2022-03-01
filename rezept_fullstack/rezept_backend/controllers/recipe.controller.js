const recipeModel = require('../models/recipes.model')

async function getAllRecipes (req, res) {
    
    const recipes = await recipeModel.find();
    res.json(recipes);

}

async function getRecipeById (req, res){

    const id= req.params.id;
    const recipe = await recipeModel.findOne({_id: id }).populate('user');
    res.json(recipe);
}

async function getRecipeByCategory (req,res){

    const params = req.params.category
    const recipes= await recipeModel.find({category:{$in:[params]}})
    res.json(recipes)
}

async function besteFunfRezepte (req,res){

    const allRezept= await recipeModel.find({}).sort({rating: -1}).limit(5);
    res.json(allRezept)
}


async function createRecipe  (req, res)  {
    try{
        const data = req.body;
        await recipeModel.create(data)
        res.json(data)
    }catch(error){
        console.error(error);
        res.send(error)
    }

}

async function deleteRecipe (req, res)  {
    const { id } = req.params;
    try {
        const recipe = await recipeModel.deleteOne({ _id: id });
        res.json(recipe);
    } catch (err) {
        return res.status(400).send('Nicht gefunden mit id: '+id+' - '+err);
    }
}

module.exports = {getAllRecipes, getRecipeById, getRecipeByCategory, deleteRecipe, createRecipe, besteFunfRezepte }