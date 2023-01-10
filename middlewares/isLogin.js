const getTokenFromHeader = require('../utils/getTokenFromHeader');
const verifyToken = require('../utils/verifyToken')

const isLogin = (req, res, next) => {
  // GET TOKEN FROM HEADER
  const token = getTokenFromHeader(req);
  // VERIFY
  const decodedUser = verifyToken(token);
  
  // SAVE USER INTO REQ ONJECT
  req.userAuth = decodedUser.id

  if (!decodedUser) {
    return res.json({
      message: "Invalid/Expired token. Please log in back again."
    })
  } else {
    next();
  }

  // VERIFY TOKEN

}

module.exports = isLogin;