import express from "express"
import {getFinanceData} from "../controllers/user.js"

const router = express.Router()

router.get("/", getFinanceData)

export default router