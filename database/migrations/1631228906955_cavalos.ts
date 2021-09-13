import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cavalos extends BaseSchema {
  protected tableName = 'cavalos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome')
      table.string('raca')
      table.integer('peso')
      table.string('port')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
