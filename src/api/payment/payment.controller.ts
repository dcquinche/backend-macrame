import {Request, Response} from 'express';
import {createPayment} from "./payment.services";
import { sendMailSendGrid } from '../../utils/mail/mail';

export async function handleCreatePayment(req: Request, res: Response) {
  const data = req.body;
  try {
    const payment = await createPayment(data);
    return res.status(200).json(payment);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleCreateOrder(req: Request, res: Response) {
  const data = req.body;
  try {
    const order = await createPayment(data);

    const msg = {
      to: order.email as string,
      from: `'No Reply' <dcquinche@gmail.com>`,
      subject: 'Entre Tejidos',
      templateId: 'd-5b8cab0805bc4abea1225636974261f0',
      dynamic_template_data:{
        name: order.name,
        orderNum: order.orderNum,
        url: 'http://localhost:3000/'
      },
    }
    await sendMailSendGrid(msg);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error);
  }
}
