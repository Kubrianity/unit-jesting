/* Remove from the array whatever is in the following arguments. Return the leftover values in an array
ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'] */

const seekAndDestroy = (arr, ...rest) => arr.filter(val => !rest.includes(val))

module.exports = seekAndDestroy