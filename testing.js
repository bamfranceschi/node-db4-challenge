const Recipes = require("./model.js");

// Recipes.getRecipes().then(res => {
//   console.log(res);
// });

// Recipes.getShoppingList(2).then(res => {
//   console.log(res);
// });

Recipes.getInstructions(2).then(res => {
  console.log(res);
});

//all functions work!
