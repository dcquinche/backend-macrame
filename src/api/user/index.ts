import { Router } from 'express';
import {handleGetUserById, handleCreateOrGetUser, handleUpdateUser} from "./user.controller";

const router = Router();

router.get("/:id", handleGetUserById);
router.post("/", handleCreateOrGetUser);
router.patch("/:id", handleUpdateUser);

export default router;
