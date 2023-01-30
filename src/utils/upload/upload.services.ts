import dotenv from 'dotenv';
dotenv.config();

const cloudinary = require('cloudinary').v2;

export async function uploadImage(image: string) {
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: 'macrameFiles',
      use_filename: true,
      unique_filename: false,
    })
    return result;
  } catch (error) {
    console.log(error);
  }
}
