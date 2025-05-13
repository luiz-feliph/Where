import "../index.css";
import "./DataTable.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Remove from "../assets/Remove.svg";
import Edit from "../assets/Edit.svg";

function DataTable({ FinanceData, setFinanceData, setOnEdit, month, setMonth }) {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = FinanceData.filter((info) => info.id !== id);

        setFinanceData(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  return (
    <table id="dataTable-container">
      <thead>
        <tr id="grid-layout" className="font-lg cor-v4">
          <th>Name</th>
          <th>CAT</th>
          <th>Value</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="dataTable-container">
        {FinanceData.map((item, i) => {
          return (
            <tr key={i} id="grid-layout" className="font-lg">
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.value}</td>
              <td>
                <img src={Edit} alt="Editar" onClick={() => handleEdit(item)} />
              </td>
              <td>
                <img
                  src={Remove}
                  alt="Remover"
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
