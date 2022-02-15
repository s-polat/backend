const Rezept= require('../models/recipes.model.js');

async function getAllRezept (req,res){
    const allRezept= await Rezept.find({})
    console.log(allRezept)
    res.json(allRezept)
}

module.exports= getAllRezept;