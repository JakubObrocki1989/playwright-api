import { OrderFactory } from '../src/factories/OrderFactory.js'
const { test, expect } = require('@playwright/test');

test('Create random order', async({request}) => {
  const orderFactory = new OrderFactory()
  const response = await request.post('https://petstore.swagger.io/v2/store/order', {
    data: JSON.parse(JSON.stringify(orderFactory.createOrder()))
  })  
  expect(await response.status()).toBe(200)
});


test('Create, read, and delete order', async({request}) => {
  let orderFactory = new OrderFactory()
  let randomOrder = orderFactory.createOrder()
  
  console.log(randomOrder)
  let response = await request.post('https://petstore.swagger.io/v2/store/order', {
    data: JSON.parse(JSON.stringify(randomOrder))
  })  
  let orderDto = await response.json()
  console.log(orderDto)
  expect(randomOrder).toStrictEqual(orderDto)
  response = await request.delete('https://petstore.swagger.io/v2/store/order/' + randomOrder.id, {})
  expect(await response.status()).toBe(200)
  response = await request.delete('https://petstore.swagger.io/v2/store/order/' + randomOrder.id, {})
  expect(await response.status()).toBe(404)
});