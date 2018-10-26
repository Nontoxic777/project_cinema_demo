const mongoose = require('mongoose')
const User = mongoose.model('User')

const createUser = async (data) => {
  let user = new User({
    username: data.username,
    password: data.password,
    email: data.email
  })
  user = await user.save()
  return {user: user}
}

const loginUser = async (data) => {
  var user = {username: data.username}
  const username = await User.find(user)
  return {username: username}
}

module.exports = {
  createUser: createUser,
  loginUser: loginUser
}
