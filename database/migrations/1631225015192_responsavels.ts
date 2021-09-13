import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Responsavels extends BaseSchema {
  protected tableName = 'responsavels'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_cavalo').unsigned().references('id').inTable('cavalos').onDelete('CASCADE')
      table.string('nome')
      table.string('email')
      table.string('cpf')
      table.string('cep')
      table.string('cidade')
      table.string('logradouro')
      table.string('bairro')
      table.string('numero')
      table.boolean('ativo').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
