const getTokenFromHeader = require('../utils/getTokenFromHeader');
const verifyToken = require('../utils/verifyToken');
const { appErr } = require('../utils/appErr')


const isLogin = (req, res, next) => {
  // GET TOKEN FROM HEADER
  const token = getTokenFromHeader(req);
  // VERIFY TOKEN
  const decodedUser = verifyToken(token);

  // SAVE USER INTO REQ ONJECT
  req.userAuth = decodedUser.id

  if (!decodedUser) {
    return next(appErr("Invalid/Expired token. Please log in back again.", 500));
  } else {
    next();
  }


}

module.exports = isLogin;