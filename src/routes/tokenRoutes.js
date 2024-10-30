import { Router } from "express";
import tokenController from "../controllers/TokenController";
import dotenv from "dotenv";

dotenv.config()
const router = new Router()

router.post('/', tokenController.store)

export default router
