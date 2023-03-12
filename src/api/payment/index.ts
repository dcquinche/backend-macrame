import { Router } from 'express';
import {handleCreatePayment} from "./payment.controller";

const router = Router();

router.post("/", handleCreatePayment);

export default router;
