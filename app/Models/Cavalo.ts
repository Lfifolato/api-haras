import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Ferradura from './Ferradura'
import Resposavel from './Resposavel'
import Consulta from './Consulta'
import Alimentacao from './Alimentacao'

export default class Cavalo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public raca: string

  @column()
  public peso: number

  @column()
  public port: string

  @hasOne(() => Resposavel, {
    foreignKey: 'id_cavalo',
  })
  public responsavel: HasOne<typeof Resposavel>

  @hasMany(() => Ferradura, {
    foreignKey: 'id_cavalo',
  })
  public ferraduras: HasMany<typeof Ferradura>

  @hasMany(() => Alimentacao, {
    foreignKey: 'id_cavalo',
  })
  public alimentacao: HasMany<typeof Alimentacao>

  @hasMany(() => Consulta, {
    foreignKey: 'id_cavalo',
  })
  public consultas: HasMany<typeof Consulta>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
