import { db } from "../db.js"

export const getFinanceData = (_, res) => {
  const q = "SELECT * FROM finance_data";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
} 

export const addData = (req, res) => {
  const q =
    "INSERT INTO finance_data(`name`, `category`, `value`, `date`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.category,
    req.body.value,
    req.body.date,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dado registrado com sucesso.");
  });
};

export const updateData = (req, res) => {
  const q =
    "UPDATE finance_data SET `name` = ?, `category` = ?, `value` = ?, `date` = ? WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.category,
    req.body.value,
    req.body.date,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dado atualizado com sucesso.");
  });
};

export const deleteData = (req, res) => {
  const q = "DELETE FROM finance_data WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dado deletado com sucesso.");
  });
};