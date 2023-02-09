import {DocumentDefinition, FilterQuery} from 'mongoose';
import Payment, {paymentDocument} from './payment.model';

export function createPayment(payment: DocumentDefinition<Omit<paymentDocument, 'createdAt' | 'updatedAt'>>) {
  return Payment.create(payment);
}

export function getPaymentFilter(filter: FilterQuery<paymentDocument>) {
  return Payment.findOne(filter);
}
