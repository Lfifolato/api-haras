import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Baia extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cod_identidade: string

  @column()
  public tamanho: string

  @column()
  public capacidade: number

  @column()
  public id_cavalo: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
