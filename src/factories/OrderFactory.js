import { faker } from '@faker-js/faker/locale/en';
let order
const orderStatuses = new Array("placed", "approved", "delivered");
export class OrderFactory {
  
    constructor() {}

    createOrder() {
        order = {
            id: Math.floor(Math.random() * (10 - 1 + 1) + 1),
            petId: Math.floor(Math.random() * (10000 - 1000 + 1) + 1000),
            quantity: Math.floor(Math.random() * (10 - 1 + 1) + 1),
            shipDate: faker.date.recent().toISOString().replace("Z", "+0000"),
            status: orderStatuses[Math.floor(Math.random() * 2)],
            complete: faker.datatype.boolean()
          }
        return order
    }   
}