const mongoose = require('mongoose')
const User = mongoose.model('User')
var bcrypt = require('bcrypt')
// var jwt = require('jwt-simple')
// var JWT_SECRET = 'sieuBaoMat'

function validateEmail (email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const createUser = async (data) => {
  const checkForm = validateEmail(data.email)
  if (checkForm) {
    const checkUser = await User.findOne({email: data.email})
    if (checkUser) {
      console.log('Email đã được đăng kí!')
      const result = false; const err = 'Email đã được đăng kí!'
      return {result: result, err: err}
    } else {
      // Tạo user mới
      let user = new User({
        username: data.username,
        password: data.password,
        email: data.email
      })
      user = await user.save()
      const result = true
      return {result: result, id: user._id}
    }
  } else {
    console.log('Email nhập vào không đúng')
    const result = false; const err = 'Email nhập vào không đúng'
    return {result: result, err: err}
  }
}

var loginUser = async (data) => {
  var email = {email: data.email}
  var password = data.password
  const authenticated = await User.findOne(email)
  if (!authenticated) {
    console.log('Error')
  }
  let result = bcrypt.compareSync(password, authenticated.password)

  return {result: result, username: authenticated}
}

const infomationUser = async (id) => {
  const user = await User.findById(id)
  if (!user) {
    console.log('Lỗi lấy thông tin user, user không tồn tại')
  } else {
    return {user: user}
  }
}

const updateUser = async (data) => {
  let result = false
  var user = await User.findById(data.id)
  if (!user) {
    console.log('Lỗi không tìm thấy user update')
  } else {
    user.set({username: data.username})
    user = await user.save()
    result = true
    return {result: result, username: data.username}
  }
}

const passwordUser = async (data) => {
  let result = false
  var user = await User.findById(data.id)
  if (!user) {
    console.log('Lỗi không tìm thấy user update')
  } else {
    let checkPass = bcrypt.compareSync(data.password, user.password)
    if (!checkPass) {
      const err = 'Mật khẩu xác nhận không đúng'
      result = false
      return {result: result, err: err}
    } else {
      user.set({password: data.newPass})
      user = await user.save()
      result = true
      return {result: result}
    }
  }
}

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  infomationUser: infomationUser,
  updateUser: updateUser,
  passwordUser: passwordUser
}
