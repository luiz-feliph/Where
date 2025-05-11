import express from "express";
import financeDataRoutes from "./routes/financeDatas.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", financeDataRoutes)

app.listen(8800);
