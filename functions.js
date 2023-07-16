const axios = require('axios')

const functions = {
  add: (x, y) => x + y,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Kubra' }
    user['lastName'] = 'Ozeren'
    return user
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then(res => res.data)
    .catch(err => err)
}

module.exports = functions