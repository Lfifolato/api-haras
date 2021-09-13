import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//Session
Route.post('/session', 'Users/SessionsController.store')
Route.delete('/session', 'Users/SessionsController.destroy')

//Users
Route.resource('/users', 'Users/UsersController').apiOnly()

//Veterinario
Route.resource('/vet', 'Veterinario/VeterinariosController').apiOnly()
