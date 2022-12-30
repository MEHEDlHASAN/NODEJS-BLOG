const express = require('express');

const commentRouter = express.Router();


// POST 
commentRouter.post('', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'comment created'
    })
  } catch (error) {
    res.json(error.message);
  }
});

// GET /:id
commentRouter.get('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Comment route'
    })
  } catch (error) {
    res.json(error.message);
  }
})


// DELETE /:id
commentRouter.delete('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Comment delete route'
    })
  } catch (error) {
    res.json(error.message);
  }
})
// PUT/api/post/:id
commentRouter.put('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Update comment route'
    })
  } catch (error) {
    res.json(error.message);
  }
})

module.exports = commentRouter;