import {DocumentDefinition, FilterQuery} from 'mongoose';
import User, {UserDocument} from './user.model';

export function getUserById(id: string) {
  return User.findById(id);
}

export function createUser(user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>) {
  return User.create(user);
}

export function updateUser(id: string, user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>) {
  return User.findByIdAndUpdate(id, user, {new: true});
}
