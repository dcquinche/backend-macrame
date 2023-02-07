import {DocumentDefinition, FilterQuery} from 'mongoose';
import Cart, {CartDocument} from './cart.model';

export function createCart(cart: DocumentDefinition<Omit<CartDocument, 'createdAt' | 'updatedAt'>>) {
  return Cart.create(cart);
}

export function updateCart(id: string, cart: DocumentDefinition<Omit<CartDocument, 'createdAt' | 'updatedAt'>>) {
  return Cart.findByIdAndUpdate(id, cart, {new: true}).populate('product');
}

export function getCartFilter(filter: FilterQuery<CartDocument>) {
  return Cart.find(filter).populate('product');
}

export function deleteCart(id: string) {
  return Cart.findByIdAndDelete(id);
}

export function getAllCarts() {
  return Cart.find({});
}

