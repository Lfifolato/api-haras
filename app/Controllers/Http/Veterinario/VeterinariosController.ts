import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Veterinario from 'App/Models/Veterinario'
import { StoreValidator, UpdateValidator } from 'App/Validators/Veterinario/index'

export default class VeterinariosController {
  public async index({ response }: HttpContextContract) {
    const data = await Veterinario.query().orderBy('id', 'asc')

    return response.status(200).send(data)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const veterinario = await Veterinario.create(data)

    return response.status(201).send(veterinario)
  }

  public async show({ params, response }: HttpContextContract) {
    const veterinario = await Veterinario.findOrFail(params.id)

    return response.status(200).send(veterinario)
  }

  public async update({ params, response, request }: HttpContextContract) {
    const veterinario = await Veterinario.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    veterinario.merge(data)

    await veterinario.save()

    return response.status(201).send(veterinario)
  }

  public async destroy({ response, params }: HttpContextContract) {
    const veterinario = await Veterinario.findOrFail(params.id)

    await veterinario.delete()

    return response.status(200).send({ mensagem: 'Veterinario deletado' })
  }
}
