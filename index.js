const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./config/dbConnect');

const app = express();

// middleware

// routes
// users route

// POST/api/users/register
app.post('/api/users/register', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'User registered'
    })
  } catch(error){
    res.json(error.message);
  }
});

// POST/api/users/login
app.post('/api/users/login', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'User logged in'
    })
  } catch(error){
    res.json(error.message);
  }
})

// GET/api/users/:id
app.get('/api/users/profile/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Profile route'
    })
  } catch(error){
    res.json(error.message);
  }
})

// GET/api/users
app.get('/api/users', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Users route'
    })
  } catch(error){
    res.json(error.message);
  }
})


// DELETE/api/users/:id
app.delete('/api/users/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Delete user route'
    })
  } catch(error){
    res.json(error.message);
  }
})
// PUT/api/users/:id
app.put('/api/users/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Update user route'
    })
  } catch(error){
    res.json(error.message);
  }
})

// ---------------------------------------------------
// posts route
// ---------------------------------------------------

// POST/api/posts
app.post('/api/posts', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'post created'
    })
  } catch(error){
    res.json(error.message);
  }
});

// GET/api/posts/:id
app.get('/api/posts/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Post route'
    })
  } catch(error){
    res.json(error.message);
  }
})

// GET/api/users
app.get('/api/posts', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Posts route'
    })
  } catch(error){
    res.json(error.message);
  }
})


// DELETE/api/posts/:id
app.delete('/api/posts/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Delete post route'
    })
  } catch(error){
    res.json(error.message);
  }
})
// PUT/api/post/:id
app.put('/api/posts/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Update post route'
    })
  } catch(error){
    res.json(error.message);
  }
})

// ---------------------------------------------------
// comments route
// ---------------------------------------------------

// POST/api/comments
app.post('/api/comments', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'comment created'
    })
  } catch(error){
    res.json(error.message);
  }
});

// GET/api/comments/:id
app.get('/api/comments/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Comment route'
    })
  } catch(error){
    res.json(error.message);
  }
})


// DELETE/api/comments/:id
app.delete('/api/comments/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Comment delete route'
    })
  } catch(error){
    res.json(error.message);
  }
})
// PUT/api/post/:id
app.put('/api/comments/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Update comment route'
    })
  } catch(error){
    res.json(error.message);
  }
})

// --------------------------------------------------------------
// categories route
//---------------------------------------------------------------

// POST/api/categories
app.post('/api/categories', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'comment created'
    })
  } catch(error){
    res.json(error.message);
  }
});

// GET/api/categories/:id
app.get('/api/categories/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Category route'
    })
  } catch(error){
    res.json(error.message);
  }
})


// DELETE/api/categories/:id
app.delete('/api/categories/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Delete category route'
    })
  } catch(error){
    res.json(error.message);
  }
})
// PUT/api/post/:id
app.put('/api/categories/:id', async(req, res) =>{
  try{
    res.json({
      status: 'Success',
      data: 'Update comment route'
    })
  } catch(error){
    res.json(error.message);
  }
})

// Error Handler

// Listen to Server

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running at Port: ${PORT}`)
})