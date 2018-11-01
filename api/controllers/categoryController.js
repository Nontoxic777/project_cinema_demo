const mongoose = require('mongoose')
const Category = mongoose.model('Category')

const createCategory = async (data) => {
  let category = new Category({
    name: data.name
  })
  category = await category.save()
  return {category: category}
}

const listCategory = async () => {
  const list = await Category.find()
  return {list: list}
}

module.exports = {
  createCategory: createCategory,
  listCategory: listCategory
}
