const userRegister = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'User registered'
    })
  } catch (error) {
    res.json(error.message);
  }
}

const userLogin = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'User logged in'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const userProfile = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Profile route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Users route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const userDelete = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Delete user route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Update user route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  userRegister,
  userLogin,
  userProfile,
  getUsers,
  userDelete,
  updateUser
}