import {Request, Response} from 'express';
import {createOrder, getOrdersFilter} from "./order.services";
import { sendMailSendGrid } from '../../utils/mail/mail';

export async function handleCreateOrder(req: Request, res: Response) {
  const data = req.body;
  try {
    const order = await createOrder(data);

    const msg = {
      to: order.email as string,
      from: `'No Reply' <dcquinche@gmail.com>`,
      subject: 'Entre Tejidos',
      templateId: 'd-5b8cab0805bc4abea1225636974261f0',
      dynamic_template_data:{
        name: order.name,
        orderNum: order.orderNum,
        url: 'https://frontend-macrame.vercel.app/'
      },
    }
    await sendMailSendGrid(msg);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleGetOrdersByUser(req: Request, res: Response) {
  const {user} = req.body;
  try {
    const filter = {user: user};
    const ordersFiltered = await getOrdersFilter(filter);
    return res.status(200).json(ordersFiltered);
  } catch (error) {
    return res.status(500).json(error);
  }
}
