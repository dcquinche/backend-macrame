import { Router } from 'express';
import {handleCreateCart, handleUpdateCart, handleDeleteCart, handleGetCartsByUser} from "./cart.controller";

const router = Router();

router.post("/", handleCreateCart);
router.patch("/:id", handleUpdateCart);
router.delete("/:id", handleDeleteCart);
router.post("/filter", handleGetCartsByUser);

export default router;
