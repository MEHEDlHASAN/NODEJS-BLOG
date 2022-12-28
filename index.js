const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./config/dbConnect');

const app = express();

// middleware

// routes

// Error Handler

// Listen to Server

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running at Port: ${PORT}`)
})