import { Router } from "express";
import dotenv from "dotenv";

import fotoController from "../controllers/FotoController";
import loginRequired from "../middlewares/loginRequired";

dotenv.config()
const router = new Router()

router.post('/', loginRequired, fotoController.store)

export default router
