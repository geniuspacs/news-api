import { Router } from "express";
import { getEverything } from "../controllers/news";

const router = Router();

router.get('/', getEverything)

export default router;