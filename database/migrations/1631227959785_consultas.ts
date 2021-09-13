import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Consultas extends BaseSchema {
  protected tableName = 'consultas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_cavalo').unsigned().references('id').inTable('cavalos').onDelete('CASCADE')
      table.enum('motivo', ['Rotina', 'Incidente'])
      table.integer('vlr_consulta')
      table.text('descricao', 'longtext')
      table.boolean('retorno').defaultTo(false)
      table.date('dta_retorno')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
