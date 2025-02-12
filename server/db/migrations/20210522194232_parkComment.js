exports.up = function (knex) {
  return knex.schema.createTable('parkComment', table => {
    table.increments('id')
    table.integer('park_id')
    table.string('user_name')
    table.string('comment')
    table.integer('rating')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('parkComment')
}
