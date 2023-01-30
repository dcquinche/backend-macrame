import Product, {ProductDocument} from './product.model';
import {DocumentDefinition} from 'mongoose';

export function getAllProducts() {
  return Product.find({});
}

export function getProductById(id: string) {
  return Product.findById(id)
}

export function createProduct(input: DocumentDefinition<Omit<ProductDocument, 'createdAt' | 'updatedAt'>>) {
  return Product.create(input)
}
