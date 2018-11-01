var express = require('express')
var router = express.Router()
var jwt = require('jwt-simple')
var JWT_SECRET = 'sieuBaoMat'

const userController = require('../controllers/userController')

router.get('/:id', async function (req, res) {
  try {
    let info = await userController.infomationUser(req.params.id)
    console.log(info)
    return res.send(info)
  } catch (err) {
    console.log('Lỗi rồi Lỗi rồi')
    console.log(req.body)
    return res.send(err)
  }
})

router.post('/update/:id', async function (req, res) {
  try {
    let result = await userController.updateUser(req.body)
    res.send(result)
  } catch (err) {
    console.log('Lỗi update')
    console.log(err)
    console.log(req.body)
    return res.send(err)
  }
})

router.post('/password/:id', async function (req, res) {
  try {
    let result = await userController.passwordUser(req.body)
    res.send(result)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.put('/login', async function (req, res) {
  try {
    let test = await userController.loginUser(req.body)
    console.log(test)
    if (test.result) {
      var token = jwt.encode(req.body, JWT_SECRET)
      return res.json({token: token, username: test.username})
    } else {
      var err = 'Thông tin bạn nhập vào không đúng'
      return res.send({err: err})
    }
  } catch (err) {
    console.log(err)
    return res.send(err)
  }
})

router.post('/create', async function (req, res) {
  try {
    let result = await userController.createUser(req.body)
    if (result.result) {
      const token = jwt.encode(req.body, JWT_SECRET)
      return res.json({token: token, username: req.body.username, id: result.id})
    } else {
      return res.send({err: result.err})
    }
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router
