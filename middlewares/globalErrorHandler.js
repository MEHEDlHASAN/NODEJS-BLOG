const globalErrorHandler = (err, req, res, next) => {
  // ERROR Status, ERROR Message, ERROR Stack
  const stack = err.stack;
  const message = err.message;
  const status = err.status ? err.status : 'Failed';
  const statusCode = err?.statuscode ? err.statusCode : 500;

  // SEND the response
  res.status(statusCode).json({
    message, status, stack
  });
  next();
};

module.exports = globalErrorHandler;