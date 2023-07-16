const seekAndDestroy = require('./seekAndDestroy')

// Check if it is function
test('seekAndDestroy function should exist', () => {
  expect(typeof seekAndDestroy).toEqual('function')
})
// OR
test('seekAndDestroy function should exist', () => {
  expect(seekAndDestroy).toBeDefined()
})
/* Remove from the array whatever is in the following arguments. Return the leftover values in an array
ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'] */
test('([3,4,1,"hello"], 1, "hello") should return [3,4]', () => {
  expect(seekAndDestroy([3,4,1,"hello"], 1, "hello")).toEqual([3,4])
})