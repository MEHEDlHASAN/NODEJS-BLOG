const mongoose = require('mongoose');

// create schema
const postSchema = new mongoose.Schema({
  title: {
    String,
    required: [true, 'Post title is required'],
    trim: true
  },
  description: {
    String,
    required: [true, 'Post description is required']
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Post category is required']
  },
  numViews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }],
  dislikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }],
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: [true, 'Author is required']
  }],
  photo: {
    type: String,
    required: [true, 'Post image is required']
  }  
},
{
  timestamps: true
});

// Compile the model
const Post = mongoose.model('Post', postSchema);
module.exports = Post;