import {Request, Response} from 'express';
import {createPayment} from "./payment.services";

export async function handleCreatePayment(req: Request, res: Response) {
  const data = req.body;
  try {
    const payment = await createPayment(data);
    return res.status(200).json(payment);
  } catch (error) {
    return res.status(500).json(error);
  }
}
