const express = require('express')

const postRouter = express.Router();
const {
  createPost,
  getPost,
  getPosts,
  deletePost,
  updatePost
} = require('../../controllers/posts/postController');


// ---------------------------------------------------
// posts route
// ---------------------------------------------------

// POST/api/posts
postRouter.post('/', createPost);
// GET/api/posts/:id
postRouter.get('/:id', getPost)
// GET/api/posts
postRouter.get('/', getPosts)
// DELETE/api/posts/:id
postRouter.delete('/:id', deletePost)
// PUT/api/post/:id
postRouter.put('/:id', updatePost)


module.exports = postRouter;