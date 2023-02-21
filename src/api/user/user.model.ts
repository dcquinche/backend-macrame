import { Schema, model, Document } from 'mongoose';

export interface UserDocument extends Document{
  email: String;
  name?: String;
  phone?: String;
  address?: String;
  city?: String;
  department?: String;
  image?: String;
  role?: 'User' | 'Admin';
  shoppingBag?: Array<Object>;
  product?: Object;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
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
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User',
  },
  shoppingBag: [{
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  }],
}, {timestamps: true,});

const User = model<UserDocument>("User", userSchema);

export default User;
