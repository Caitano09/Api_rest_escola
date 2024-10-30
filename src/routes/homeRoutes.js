import { Router } from "express";
import homeController from "../controllers/HomeController";
import dotenv from "dotenv";

dotenv.config()
const router = new Router()

router.get('/', homeController.index)

export default router
