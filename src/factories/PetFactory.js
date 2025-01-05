import { faker } from '@faker-js/faker/locale/en';
let pet
const petStatuses = new Array("available", "pending", "sold");
export class PetFactory {
  
    constructor() {}

    createPet() {
        pet = {
            id: Math.floor(Math.random() * (10000 - 1000 + 1) + 1000),
            category: {
              id : Math.floor(Math.random() * (100 - 1 + 1) + 1000),
              name: faker.person.firstName()
            },
            name: faker.person.firstName(),
            photoUrls: [
              "string"
            ],
            tags: [
              {
                id: Math.floor(Math.random() * (100 - 1 + 1) + 1000),
                name: faker.person.firstName()
              }
            ],
            status: petStatuses[Math.floor(Math.random() * 2)] 
        }
        return pet
    }   
}