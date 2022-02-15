const Rezepte = require('../models/recipes.model.js');

  async function createRecipe(req, res) {
    try {
      await Rezepte.create(req.body)
    } catch (error) {
      console.error(error)
      res.send(error)
    }
    res.send('created')
  }



  exports.createRecipe = createRecipe