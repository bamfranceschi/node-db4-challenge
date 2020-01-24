exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "pizza",
          instructions:
            "make dough, roll out dough, spread the tomato sauce and sprinkle with cheese. Bake at 400 degrees for 15 minutes."
        },
        {
          recipe_name: "pb&j",
          instructions:
            "spread peanut butter on one slice of bread. spread jam on the other piece of bread. put the pieces of bread together"
        },
        {
          recipe_name: "mint and almond pesto linguini",
          instructions:
            "make the mint and almond pesto. boil the pasta, and mix it together!"
        }
      ]);
    });
};
