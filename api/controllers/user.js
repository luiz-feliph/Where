import { db } from "../db.js"

export const getFinanceData = (_, res) => {
  const q = "SELECT * FROM finance_data";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
} 

