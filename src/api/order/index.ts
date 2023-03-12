import { Router } from 'express';
import {handleCreateOrder, handleGetOrdersByUser} from "./order.controller";

const router = Router();

router.post("/", handleCreateOrder);
router.post("/filter", handleGetOrdersByUser);

export default router;
