import { Schema, model, Document } from 'mongoose';

export interface CartDocument extends Document{
  amount: Number;
  product: Object;
  user?: Object;
  createdAt?: Date;
  updatedAt?: Date;
}

const cartSchema = new Schema({
  amount: {
    type: Number,
    require: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {timestamps: true,});

const Cart = model<CartDocument>("Cart", cartSchema);

export default Cart;
