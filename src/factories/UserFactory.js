import { faker } from '@faker-js/faker/locale/en';
let user
export class UserFactory {
  
    constructor() {}

    createUser() {
        user = {
            id: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
            username: faker.person.firstName() + faker.person.lastName(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            phone: Math.floor(Math.random() * (999999999 - 100000000 + 100000000) + 100000000).toString(),
            userStatus: Math.floor(Math.random() * (10 - 1 + 1) + 1)
          }
        return user
    }   
}