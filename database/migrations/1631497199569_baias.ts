import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Baias extends BaseSchema {
  protected tableName = 'baias'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cod_identidade')
      table.string('tamanho')
      table.integer('capacidade')
      table.integer('id_cavalo').unsigned().references('id').inTable('cavalos').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
