import express from "express"
import { addData, deleteData, getFinanceData, updateData } from "../controllers/user.js";


const router = express.Router()

router.get("/", getFinanceData)

router.post("/", addData)

router.put("/:id", updateData)

router.delete("/:id", deleteData)

export default router