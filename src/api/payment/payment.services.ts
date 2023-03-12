import {DocumentDefinition, FilterQuery} from 'mongoose';
import Payment, {PaymentDocument} from './payment.model';

export function createPayment(payment: DocumentDefinition<Omit<PaymentDocument, 'createdAt' | 'updatedAt'>>) {
  return Payment.create(payment);
}
