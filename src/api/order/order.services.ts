import {DocumentDefinition, FilterQuery} from 'mongoose';
import Order, {OrderDocument} from './order.model';

export function createOrder(order: DocumentDefinition<Omit<OrderDocument, 'createdAt' | 'updatedAt'>>) {
  return Order.create(order);
}

export function getOrdersFilter(filter: FilterQuery<OrderDocument>) {
  return Order.find(filter).populate({path: 'shoppingBag', populate: {path: 'product'}});;
}
