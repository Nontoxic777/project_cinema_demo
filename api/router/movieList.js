var express = require('express')
var router = express.Router()

const movieController = require('../controllers/movieController')

router.get('/', async function (req, res) {
  try {
    const list = await movieController.listMovie(res.body)
    res.send(list)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router
