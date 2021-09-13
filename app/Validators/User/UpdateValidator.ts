import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional({ trim: true }),
    email: schema.string.optional({ trim: true }),
    password: schema.string.optional({ trim: true }),
    ativo: schema.boolean.optional(),
  })

  public messages = {}
}
