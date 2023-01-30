import {Request, Response} from 'express';
import {getUserById, createUser, updateUser} from "./user.services";

export async function handleGetUserById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleCreateUser(req: Request, res: Response) {
  const data = req.body;
  try {
    const user = await createUser(data);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateUser(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  try {
    const user = await updateUser(id, data);
    if (!user) {
      return res.status(404).json({ message: "User not found to update" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}
