import { Schema, model, Document } from 'mongoose';

export interface UserDocument extends Document{
  email: String;
  password: String;
  name?: String;
  phone?: String;
  address?: String;
  city?: String;
  department?: String;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  department: {
    type: String,
  },
}, {timestamps: true,});

const User = model<UserDocument>("User", userSchema);

export default User;
