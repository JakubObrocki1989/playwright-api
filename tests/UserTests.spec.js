import { UserFactory } from '../src/factories/UserFactory.js'
const { test, expect } = require('@playwright/test');

test('Create random user', async({request}) => {
  const userFactory = new UserFactory()
  const response = await request.post('https://petstore.swagger.io/v2/user', {
    data: JSON.parse(JSON.stringify(userFactory.createUser()))
  })  
  expect(await response.status()).toBe(200)
});


test('Create, read, and delete user', async({request}) => {
  let userFactory = new UserFactory()
  let randomUser = userFactory.createUser()
  console.log(randomUser)
  let response = await request.post('https://petstore.swagger.io/v2/user', {
    data: JSON.parse(JSON.stringify(randomUser))
  })  
  expect(await response.status()).toBe(200)
  response = await request.get('https://petstore.swagger.io/v2/user/' + randomUser.username, {})  
  expect(await response.status()).toBe(200)
  let userDto = await response.json()
  console.log(userDto)
  expect(randomUser).toStrictEqual(userDto)
  response = await request.delete('https://petstore.swagger.io/v2/user/' + randomUser.username, {})
  expect(await response.status()).toBe(200)
  response = await request.delete('https://petstore.swagger.io/v2/user/' + randomUser.username, {})
  expect(await response.status()).toBe(404)
});