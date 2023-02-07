import { Router } from 'express';
import {handleCreateOrGetUser, handleUpdateUser} from "./user.controller";

const router = Router();

router.post("/", handleCreateOrGetUser);
router.patch("/:id", handleUpdateUser);

export default router;
