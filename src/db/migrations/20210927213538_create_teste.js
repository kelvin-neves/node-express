
exports.up = function(knex) {
    return knex.schema.createTable('teste', function(table){
        table.bigint('id').primary().notNullable()
        table.string('teste')
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('teste')
};
