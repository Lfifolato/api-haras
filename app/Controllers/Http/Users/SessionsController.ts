import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class SessionsController {
  public async store({ auth, request, response }: HttpContextContract) {
    const { email, password } = await request.all()

    const user = await User.findBy('email', email)

    const token = await auth.attempt(email, password, {
      expiresIn: '90 days',
    })

    return response.status(200).send({ user, token })
  }

  public async destroy({ auth }: HttpContextContract) {
    auth.logout()
  }
}
