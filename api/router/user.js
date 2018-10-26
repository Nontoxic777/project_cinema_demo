var express = require('express')
var router = express.Router()

const userController = require('../controllers/userController')

router.get('/', async function (req, res) {
  try {
    const username = await userController.loginUser()
    res.send(username)
    console.log(username)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.post('/', async function (req, res) {
  try {
    let user = await userController.createUser(req.body)
    res.send(user)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router
