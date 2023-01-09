const express = require('express');

const commentRouter = express.Router();


const {
  createComment,
  getComment,
  deleteComment,
  updateComment
} = require('../../controllers/comments/commentController');


// POST 
commentRouter.post('', createComment);
// GET /:id
commentRouter.get('/:id', getComment);
// DELETE /:id
commentRouter.delete('/:id', deleteComment)
// PUT/api/post/:id
commentRouter.put('/:id', updateComment)

module.exports = commentRouter;