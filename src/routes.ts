import { Application } from 'express';
import product from './api/product';
import user from './api/user';

function routes(app: Application):void {
  app.use('/api/products', product);
  app.use('/api/users', user);
}

export default routes;
