import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [
      rules.unique({ table: 'users', column: 'email' }),
      rules.email(),
    ]),
    password: schema.string({ trim: true }),
  })

  public messages = {
    required: '{{ field }} campo Obrigatorio',
    unique: '{{ field }} Já Cadastrado',
    email: 'Email Invalido',
  }
}
