import { Schema, model, Document } from 'mongoose';

export interface paymentDocument extends Document{
  totalPrice?: Number;
  email?: String;
  name?: String;
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
  totalPrice: {
    type: Number,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
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
