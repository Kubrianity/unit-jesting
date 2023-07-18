const functions = require('./functions')

beforeEach(() => initDatabase()) //called before each test
afterEach(() => closeDatabase()) //called after each test

beforeAll(() => initDatabase()) //called once before all test
afterAll(() => closeDatabase()) //called once after all test

const initDatabase = () => console.log('Database initializing')
const closeDatabase = () => console.log('Database closing')

const checkName = () => console.log('Checking name...')

describe('Checking names', () => {
  beforeEach(() => checkName())
  test('Fetched username should be Ervin Howell', async () => {
    expect.assertions(1)
    const user = await functions.fetchUser()
    expect(user.name).toEqual('Ervin Howell')
  })
})

// for non primitive values, we should use toEqual
test('User should be Kubra Ozeren', () => {
  expect(functions.createUser())            
  .toEqual({ firstName: 'Kubra', lastName: 'Ozeren'})  
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

