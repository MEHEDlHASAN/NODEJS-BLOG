const express = require('express');
const categoryRouter = express.Router();

const {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory
} = require('../../controllers/categories/categoryController');

// POST/api/categories
categoryRouter.post('/', createCategory);

// POST/api/categories
categoryRouter.get('/', getCategories);

// GET/api/categories/:id
categoryRouter.get('/:id', getCategory)


// DELETE/api/categories/:id
categoryRouter.delete('/:id', deleteCategory);
// PUT/api/post/:id
categoryRouter.put('/:id', updateCategory);

module.exports = categoryRouter;