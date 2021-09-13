import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Alimentacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public alimento: string

  @column()
  public tipo: 'Cafe' | 'Almoço' | 'Janta'

  @column()
  public quant_kg: Number

  @column()
  public agua: Boolean

  @column()
  public id_cavalo: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
