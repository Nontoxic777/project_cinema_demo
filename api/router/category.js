var express = require('express')
var router = express.Router()
const categoryController = require('../controllers/categoryController')

router.post('/create', async function (req, res) {
  try {
    let category = await categoryController.createCategory(req.body)
    res.send(category)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.get('/list', async function (req, res) {
  try {
    const listCategory = await categoryController.listCategory()
    res.send(listCategory)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router
