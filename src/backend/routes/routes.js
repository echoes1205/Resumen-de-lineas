import express from "express";
import { createBloque1, getAllBlogs, getBloque1, updateBloque1 } from "../controllers/Bloque1Controller.js";

const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:id', getBloque1)
router.post('/', createBloque1)
router.put('/:id', updateBloque1)

export default router