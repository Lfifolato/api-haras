import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UserFactory } from 'Database/factories'

export default class FactorySeeder extends BaseSeeder {
  public async run() {
    const user = await UserFactory.createMany(15000)
  }
}
