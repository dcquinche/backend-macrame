import { Router } from 'express';
import {handleGetUserById, handleCreateUser, handleUpdateUser} from "./user.controller";

const router = Router();

router.get("/:id", handleGetUserById);
router.post("/", handleCreateUser);
router.patch("/:id", handleUpdateUser);

export default router;
