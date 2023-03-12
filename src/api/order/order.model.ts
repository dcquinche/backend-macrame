import { Schema, model, Document } from 'mongoose';

export interface OrderDocument extends Document{
  email: String;
  name: String;
  orderNum: String;
  totalPrice: Number;
  user: Object;
  shoppingBag: Array<Object>;
  createdAt?: Date;
  updatedAt?: Date;
}

const orderSchema = new Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  orderNum: {
    type: String,
  },
  totalPrice: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  shoppingBag: [{
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  }],
}, {timestamps: true,});

const Order = model<OrderDocument>("Order", orderSchema);

export default Order;
