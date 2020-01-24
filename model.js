const db = require("./data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

//all functions work! woot woot

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients as i")
    .join("recipe_details as r", "i.id", "r.ing_id")
    .where("r.recipe_id", id)
    .select("i.ing_name", "r.ing_quantity");
}

function getInstructions(id) {
  return db("recipes")
    .where("id", id)
    .select("recipes.instructions");
}
