const express = require('express')

const postRouter = express.Router();


// ---------------------------------------------------
// posts route
// ---------------------------------------------------

// POST/api/posts
postRouter.post('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'post created'
    })
  } catch (error) {
    res.json(error.message);
  }
});

// GET/api/posts/:id
postRouter.get('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Post route'
    })
  } catch (error) {
    res.json(error.message);
  }
})

// GET/api/users
postRouter.get('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Posts route'
    })
  } catch (error) {
    res.json(error.message);
  }
})


// DELETE/api/posts/:id
postRouter.delete('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Delete post route'
    })
  } catch (error) {
    res.json(error.message);
  }
})
// PUT/api/post/:id
postRouter.put('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Update post route'
    })
  } catch (error) {
    res.json(error.message);
  }
})


module.exports = postRouter;