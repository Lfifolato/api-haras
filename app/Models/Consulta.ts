import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Veterinario from './Veterinario'

export default class Consulta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public motivo: 'Rotina' | 'Incidente'

  @column()
  public vlr_consulta: Number

  @column()
  public descricao: string

  @column()
  public retorno: boolean

  @column()
  public dta_retorno: Date

  @column()
  public id_cavalo: number

  @hasOne(() => Veterinario, {
    foreignKey: 'id_consulta',
  })
  public veterinario: HasOne<typeof Veterinario>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
