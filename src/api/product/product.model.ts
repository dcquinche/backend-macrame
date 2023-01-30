import { Schema, model, Document } from 'mongoose';

export interface ProductDocument extends Document{
  name: String,
  image: String,
  price: Number,
  description?: String,
  category: String,
  createdAt?: Date;
  updatedAt?: Date;
}

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    enum: ["Accesorios", "Atrapasueños", "Cojines", "Portamacetas", "Tapices"],
    require: true,
  },
}, {timestamps: true,});

const Product = model<ProductDocument>("Product", productSchema);

export default Product;
