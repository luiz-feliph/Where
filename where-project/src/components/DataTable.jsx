import "../index.css";
import "./DataTable.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Remove from "../assets/Remove.svg";
import Edit from "../assets/Edit.svg";

function DataTable({
  FinanceData,
  setFinanceData,
  setOnEdit,
  month,
  setMonth,
}) {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = FinanceData.filter((info) => info.id !== id);

        setFinanceData(newArray);
      })
      .catch(({ data }) => console.log("data: " + data));

    setOnEdit(null);
  };

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  const groupByDay = (FinanceData) => {
    const grouped = {};

    FinanceData.forEach((item) => {
      const day = new Date(item.date).getDate();

      if (!grouped[day]) {
        grouped[day] = [];
      }

      grouped[day].push(item);
    });

    return grouped;
  };

  const dataByDay = groupByDay(FinanceData);

  return (
    <div>
      {Object.entries(groupByDay(FinanceData)).map(([day, items]) => (
        <div key={day}>
          <h3 id="month-day">
            {month} {day}
          </h3>

          <table id="dataTable-container">
            <tbody>
              {items.map((item) => (
                <tr key={item.id}  id="grid-layout" className="font-lg">
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.value}</td>
                  <td>
                    <img
                      src={Edit}
                      alt="Editar"
                      onClick={() => handleEdit(item)}
                    />
                  </td>
                  <td>
                    <img
                      src={Remove}
                      alt="Remover"
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default DataTable;
