const createPost = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'post created'
    })
  } catch (error) {
    res.json(error.message);
  }
}

const getPost = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Post route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const getPosts = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Posts route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Delete post route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Update post route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  createPost,
  getPost,
  getPosts,
  deletePost,
  updatePost
}