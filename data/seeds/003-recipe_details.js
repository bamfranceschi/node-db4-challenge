exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_details")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_details").insert([
        { recipe_id: 1, ing_id: 1, ing_quantity: 2 },
        { recipe_id: 1, ing_id: 2, ing_quantity: 0.5 },
        { recipe_id: 1, ing_id: 3, ing_quantity: 2 },
        { recipe_id: 1, ing_id: 4, ing_quantity: 1 },
        { recipe_id: 1, ing_id: 5, ing_quantity: 0.25 },
        { recipe_id: 1, ing_id: 6, ing_quantity: 4 },
        { recipe_id: 2, ing_id: 7, ing_quantity: 2 },
        { recipe_id: 2, ing_id: 8, ing_quantity: 3 },
        { recipe_id: 2, ing_id: 9, ing_quantity: 2 },
        { recipe_id: 3, ing_id: 10, ing_quantity: 2 },
        { recipe_id: 3, ing_id: 11, ing_quantity: 2 },
        { recipe_id: 3, ing_id: 12, ing_quantity: 2 },
        { recipe_id: 3, ing_id: 13, ing_quantity: 2 }
      ]);
    });
};
