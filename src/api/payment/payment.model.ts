import { Schema, model, Document } from 'mongoose';

export interface paymentDocument extends Document{
  totalPrice: Number;
  email: String;
  name: String;
  carts?: Array<Object>;
  createdAt?: Date;
  updatedAt?: Date;
}

const paymentSchema = new Schema({
  totalPrice: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  carts: [{
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  }],
}, {timestamps: true,});

const Payment = model<paymentDocument>("Payment", paymentSchema);

export default Payment;
