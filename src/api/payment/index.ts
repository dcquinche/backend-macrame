import { Router } from 'express';
import {handleCreatePayment, handleCreateOrder} from "./payment.controller";

const router = Router();

router.post("/", handleCreatePayment);
router.post("/order", handleCreateOrder);

export default router;
