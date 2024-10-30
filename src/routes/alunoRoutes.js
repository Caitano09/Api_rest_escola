import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import dotenv from "dotenv";
import loginRequired from "../middlewares/loginRequired";

dotenv.config()
const router = new Router()



router.get('/', alunoController.index)
router.get('/:id', alunoController.show)
router.post('/', loginRequired, alunoController.store)
router.put('/:id', loginRequired, alunoController.update)
router.delete('/:id', loginRequired, alunoController.delete)

export default router
