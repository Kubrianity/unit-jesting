const isAnagram = require('./anagram')

test('isAnagram should be function', () => {
  expect(typeof isAnagram).toEqual('function')
})

test('"A decimal point" is an anagram of "Im a dot in place"', () => {
  expect(isAnagram('A decimal point', 'Im a dot in place.')).toBeTruthy()
})

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy()
})

test('"Hello" is NOT an anagram of "Hola"', () => {
  expect(isAnagram('Hello', 'Hola')).toBeFalsy()
})