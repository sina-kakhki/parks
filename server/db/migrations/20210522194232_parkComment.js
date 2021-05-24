exports.up = function (knex) {
  return knex.schema.createTable('parkComment', table => {
    table.increments('id')
    table.integer('park_id').references('id').inTable('parks')
    table.string('user_name')
    table.string('comment')
    table.int('rating')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('parkComment')
}
