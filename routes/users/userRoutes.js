const express = require('express');
const {
  userRegister,
  userLogin,
  userProfile,
  getUsers,
  userDelete,
  updateUser
} = require('../../controllers/users/userController');
const isLogin = require("../../middlewares/isLogin");

const userRouter = express.Router();


userRouter.post('/register', userRegister);
// POST/api/users/login
userRouter.post('/login', userLogin);

// GET/api/users/:id
userRouter.get('/profile/', isLogin, userProfile)

// GET/api/users
userRouter.get('/', getUsers)
// DELETE/api/users/:id
userRouter.delete('/:id', userDelete)
// PUT/api/users/:id
userRouter.put('/:id', updateUser)


module.exports = userRouter;