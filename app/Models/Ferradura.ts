import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Ferradura extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public material: string

  @column()
  public quantity: number

  @column()
  public dta_validade: Date

  @column({ serializeAs: null })
  public id_tecnico: number

  @column()
  public id_cavalo: number

  @hasOne(() => User, {
    foreignKey: 'id_tecnico',
  })
  public tecnico: HasOne<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
