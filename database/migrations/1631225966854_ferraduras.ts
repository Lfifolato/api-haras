import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ferraduras extends BaseSchema {
  protected tableName = 'ferraduras'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_cavalo').unsigned().references('id').inTable('cavalos').onDelete('CASCADE')
      table.string('material')
      table.integer('quant')
      table.date('dta_validade')
      table.integer('id_tecnico').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
