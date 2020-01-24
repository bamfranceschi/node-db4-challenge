exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ing_name: "mozzarella cheese" },
        { ing_name: "tomato sauce" },
        { ing_name: "flour" },
        { ing_name: "water" },
        { ing_name: "yeast" },
        { ing_name: "olive oil" },
        { ing_name: "peanut butter" },
        { ing_name: "jam" },
        { ing_name: "bread slices" },
        { ing_name: "mint" },
        { ing_name: "almonds" },
        { ing_name: "linguini" },
        { ing_name: "parmesan" }
      ]);
    });
};
