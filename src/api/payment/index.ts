import { Router } from 'express';
import {handleCreatePayment, handleCreateOrder, handleGetPaymentByUser} from "./payment.controller";

const router = Router();

router.post("/", handleCreatePayment);
router.post("/order", handleCreateOrder);
router.post("/filter", handleGetPaymentByUser);

export default router;
