const functions = {
  add: (x, y) => x + y,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Kubra' }
    user['lastName'] = 'Ozeren'
    return user
  }
}

module.exports = functions