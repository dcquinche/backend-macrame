import { Router } from 'express';
import {handleGetAllProducts, handleGetProductById, handleCreateProduct} from "./product.controller";

const router = Router();

router.get("/", handleGetAllProducts);
router.get("/:id", handleGetProductById);
router.post("/", handleCreateProduct);

export default router;
