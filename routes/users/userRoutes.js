const express = require('express')

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'User registered'
    })
  } catch (error) {
    res.json(error.message);
  }
});


// POST/api/users/login
userRouter.post('/login', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'User logged in'
    })
  } catch (error) {
    res.json(error.message);
  }
})

// GET/api/users/:id
userRouter.get('/profile/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Profile route'
    })
  } catch (error) {
    res.json(error.message);
  }
})

// GET/api/users
userRouter.get('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Users route'
    })
  } catch (error) {
    res.json(error.message);
  }
})


// DELETE/api/users/:id
userRouter.delete('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Delete user route'
    })
  } catch (error) {
    res.json(error.message);
  }
})
// PUT/api/users/:id
userRouter.put('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Update user route'
    })
  } catch (error) {
    res.json(error.message);
  }
})


module.exports = userRouter;