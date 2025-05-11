import "../index.css";
import "./DataTable.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Remove from "../assets/Remove.svg";
import Edit from "../assets/Edit.svg";

function DataTable({ FinanceData }) {
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
            <tr key={i} id="grid-layout" className="font-lg cor-v4">
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.value}</td>
              <td>
                <img src={Remove} alt="Remover" />
              </td>
              <td>
                <img src={Edit} alt="Editar" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
