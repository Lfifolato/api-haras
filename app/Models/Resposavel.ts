import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Resposavel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column()
  public cep: string

  @column()
  public cidade: string

  @column()
  public logradouro: string

  @column()
  public bairro: string

  @column()
  public numero: string

  @column()
  public ativo: Boolean

  @column()
  public id_cavalo: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
