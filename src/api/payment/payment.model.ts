import { Schema, model, Document } from 'mongoose';

export interface paymentDocument extends Document{
  email?: String;
  name?: String;
  orderNum?: String;
  totalPrice?: Number;
  user?: Object;
  event?: String;
  data?: Object;
  environment?: String;
  signature?: Object;
  timestamp?: Number;
  sent_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const paymentSchema = new Schema({
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
  event: {
    type: String,
  },
  data: {
    type: Object,
  },
  environment: {
    type: String,
  },
  signature: {
    type: Object,
  },
  timestamp: {
    type: Number,
  },
  sent_at: {
    type: Date,
  },
}, {timestamps: true,});

const Payment = model<paymentDocument>("Payment", paymentSchema);

export default Payment;
