exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 128)
        .unique()
        .notNullable();
      tbl.string("instructions", 600).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ing_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("recipe_details", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("ing_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.float("ing_quantity");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_details")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
