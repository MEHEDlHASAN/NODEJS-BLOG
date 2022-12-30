const express = require('express');
const categoryRouter = express.Router();
// POST/api/categories
categoryRouter.post('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Category created route'
    })
  } catch (error) {
    res.json(error.message);
  }
});

// POST/api/categories
categoryRouter.get('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Category list route'
    })
  } catch (error) {
    res.json(error.message);
  }
});

// GET/api/categories/:id
categoryRouter.get('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Category route'
    })
  } catch (error) {
    res.json(error.message);
  }
})


// DELETE/api/categories/:id
categoryRouter.delete('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Delete category route'
    })
  } catch (error) {
    res.json(error.message);
  }
})
// PUT/api/post/:id
categoryRouter.put('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Update comment route'
    })
  } catch (error) {
    res.json(error.message);
  }
})

module.exports = categoryRouter;