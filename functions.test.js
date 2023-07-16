const functions = require('./functions')

// matches for primitive types
test('Adds 1 and 4 to equal 5', () => {
  expect(functions.add(1,4)).toBe(5)    
})
test('Adds 1 and 4 to NOT equal 4', () => {
  expect(functions.add(1,4)).not.toBe(4)
})
test('Should be null', () => {
  expect(functions.isNull()).toBeNull()  
})
// checks if "undefined" not truthy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)). 
  not.toBeTruthy()  
})
// for non primitive values, we should use toEqual
test('User should be Kubra Ozeren', () => {
  expect(functions.createUser())            
  .toEqual({ firstName: 'Kubra', lastName: 'Ozeren'})  
})
// Less than and greater than
test('Should be under 0', () => {
  const num1 = -1
  const num2 = 10
  expect(num1 * num2).toBeLessThanOrEqual(0);
})
// Regex
test('There is no s in Cube', () => {
  expect('Cube').not.toMatch(/S/i)
})
// Check an item in an array
test('Cat should be in pets', () => {
  pets = ['dog', 'bird', 'cat']
  expect(pets).toContain('cat')
})
// Working with promises
test('Fetched username should be Ervin Howell', () => {
  expect.assertions(1)
  return functions.fetchUser()
    .then(user => {
      expect(user.name).toEqual('Ervin Howell')
    })
})
// Working with async await
test('Fetched username should be Ervin Howell', async () => {
  expect.assertions(1)
  const user = await functions.fetchUser()
  expect(user.name).toEqual('Ervin Howell')
})