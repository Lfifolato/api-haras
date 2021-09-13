import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Veterinarios extends BaseSchema {
  protected tableName = 'veterinarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('id_consulta')
        .unsigned()
        .references('id')
        .inTable('consultas')
        .onDelete('CASCADE')

      table.string('nome')
      table.string('cpf')
      table.string('email')
      table.string('crmv')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
