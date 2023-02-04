import { Request, Response, NextFunction } from 'express';
import {getAllProducts, getProductById, createProduct} from "./product.services";

export async function handleGetAllProducts(req: Request, res: Response, next: NextFunction) {
  try {
    const products = await getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleGetProductById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const product = await getProductById(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.status(200).json(product);
}

export async function handleCreateProduct(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  try {
    const newProduct = await createProduct(data);
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
}
