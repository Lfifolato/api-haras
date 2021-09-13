import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Alimentacaos extends BaseSchema {
  protected tableName = 'alimentacaos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_cavalo').unsigned().references('id').inTable('cavalos').onDelete('CASCADE')
      table.string('alimento')
      table.enu('tipo', ['Cafe', 'Almoço', 'Janta'])
      table.integer('quant_kg')
      table.boolean('agua')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
