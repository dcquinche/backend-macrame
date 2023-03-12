import { Schema, model, Document } from 'mongoose';

export interface PaymentDocument extends Document{
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

const Payment = model<PaymentDocument>("Payment", paymentSchema);

export default Payment;
