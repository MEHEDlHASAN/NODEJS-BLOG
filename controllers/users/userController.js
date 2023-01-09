const bcrypt = require('bcryptjs');
const User = require('../../model/User/User');

const userRegister = async (req, res) => {
  const { firstname, lastname, profilePhoto, email, password } = req.body;
  console.log(password);

  try {
    // Check if email exists
    const userFound = await User.findOne({ email });

    if (userFound) {
      return res.json({
        msg: 'User already exists.'
      })
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    console.log('Password: ' + password + ' is type of ' + typeof (password));
    console.log('SALT: ' + salt + ' is type of ' + typeof (salt));
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the User
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword
    })
    res.json({
      status: 'success',
      data: user
    })
  } catch (error) {
    res.json(error.message);
  }
}

const userLogin = async (req, res) => {
  const { email, password } = req.body
  try {
    // Check if email exists
    const userFound = await User.findOne({ email });
    
    if (!userFound) {
      return res.json({
        msg: "Invalid login credentials."
      })
    }

    // Verify user password
    const isPasswordMatched = await bcrypt.compare(password, userFound.password);

    if (!isPasswordMatched) {
      return res.json({
        msg: "Invalid login credentials."
      })
    }

    res.json({
      status: 'Success',
      data: userFound
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