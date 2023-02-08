import { Schema, model, Document } from 'mongoose';

export interface paymentDocument extends Document{
  email?: String;
  name?: String;
  orderNum?: String;
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
