import { Router } from "express";
import userController from "../controllers/UserController";
import dotenv from "dotenv";
import loginRequired from "../middlewares/loginRequired";

dotenv.config()
const router = new Router()

router.get('/', userController.index)
router.get('/:id', userController.show)
router.post('/', userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router
