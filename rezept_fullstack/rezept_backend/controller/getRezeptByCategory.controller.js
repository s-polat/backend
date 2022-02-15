const Rezept= require('../models/recipes.model.js');

async function getRezeptByCategory (req,res){

    const params = req.params.category


    const allRezept= await Rezept.find({category:{$in:[params]}})
    console.log(allRezept)
    res.json(allRezept)
}

module.exports= getRezeptByCategory;