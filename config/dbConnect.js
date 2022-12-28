const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// Function to connect
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('DB connected!')
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

dbConnect();