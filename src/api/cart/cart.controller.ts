import {Request, Response} from 'express';
import {createCart, updateCart, getCartFilter, deleteCart} from "./cart.services";

export async function handleCreateCart(req: Request, res: Response) {
  const data = req.body;
  try {
    const cart = await createCart(data);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateCart(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  try {
    const cart = await updateCart(id, data);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found to update" });
    }
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteCart(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteCart(id);
    return res.status(200).json({ message: "Cart deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleGetCartsByUser(req: Request, res: Response) {
  const {user} = req.body;
  try {
    const filter = {user: user};
    const cartsFiltered = await getCartFilter(filter);
    return res.status(200).json(cartsFiltered);
  } catch (error) {
    return res.status(500).json(error);
  }
}
