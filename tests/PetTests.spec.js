import { PetFactory } from '../src/factories/PetFactory.js'
const { test, expect } = require('@playwright/test');

test('Create random pet', async({request}) => {
  const petFactory = new PetFactory()
  const response = await request.post('https://petstore.swagger.io/v2/pet', {
    data: JSON.parse(JSON.stringify(petFactory.createPet()))
  })  
  expect(await response.status()).toBe(200)
});

test('Create, read, update and delete pet', async({request}) => {
  let petFactory = new PetFactory()
  let randomPet = petFactory.createPet()
  let response = await request.post('https://petstore.swagger.io/v2/pet', {
    data: JSON.parse(JSON.stringify(randomPet))
  })  
  let petDto = await response.json()
  expect(randomPet).toStrictEqual(petDto)
  randomPet.category.name = "sample name"
  response = await request.put('https://petstore.swagger.io/v2/pet', {
    data: JSON.parse(JSON.stringify(randomPet))
  })  
  let updatedPet = await response.json()
  expect(randomPet).toStrictEqual(updatedPet)
  response = await request.delete('https://petstore.swagger.io/v2/pet/' + randomPet.id, {})
  expect(await response.status()).toBe(200)
  response = await request.delete('https://petstore.swagger.io/v2/pet/' + randomPet.id, {})
  expect(await response.status()).toBe(404)
})