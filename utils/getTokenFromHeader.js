const getTokenFromHeader = req => {
  const headerObj = req.headers;
  const token = headerObj["authorization"].split(" ")[1];

  if (token !== undefined) {
    return token;
  } else {
    return false;
    //   {
    //     // status: "failed",
    //     // message: "There is no token to the header."
    //   }
  }

}

module.exports = getTokenFromHeader