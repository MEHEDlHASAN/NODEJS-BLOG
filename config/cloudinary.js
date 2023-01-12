const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env['CLOUDINARY_NAME'],
  api_key: process.env['COUDINARY_API_KEY'],
  api_secret: process.env['COUDINARY_API_SECRET']
});

// Instance of cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg','png','gif'],
  params: {
    folder: 'blog-api',
    transformation: [{width: 500, height: 500, crop: 'limit'}]
  }
});

module.exports = storage;