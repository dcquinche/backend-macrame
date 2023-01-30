import { Application } from 'express';
import product from './api/product';
import user from './api/user';
import upload from './utils/upload';

function routes(app: Application):void {
  app.use('/api/products', product);
  app.use('/api/users', user);
  app.use('/api/uploads', upload);
}

export default routes;
