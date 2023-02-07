import exp from 'constants';
import {Request, Response} from 'express';
import {createUser, updateUser, getUserFilter} from "./user.services";

export async function handleCreateOrGetUser(req: Request, res: Response) {
  const data = req.body;
  const {email} = req.body;
  try {
    const filter = {email: email};
    const userFiltered = await getUserFilter(filter);
    if(userFiltered){
      return res.status(200).json(userFiltered);
    } else {
      const user = await createUser(data);
      return res.status(200).json(user);
    }
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
