exports.up = function (knex) {
  return knex.schema.createTable('toVisit', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('park_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('toVisit')
}
