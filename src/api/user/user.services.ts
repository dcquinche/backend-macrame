import {DocumentDefinition, FilterQuery} from 'mongoose';
import User, {UserDocument} from './user.model';

export function createUser(user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>) {
  return User.create(user);
}

export function updateUser(id: string, user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>) {
  return User.findByIdAndUpdate(id, user, {new: true}).populate({path: 'shoppingBag', populate: {path: 'product'}});
}

export function getUserFilter(filter: FilterQuery<UserDocument>) {
  return User.findOne(filter).populate({path: 'shoppingBag', populate: {path: 'product'}});
}
