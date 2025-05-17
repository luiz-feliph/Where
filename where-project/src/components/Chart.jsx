import "../index.css";
import "./Chart.css";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ FinanceData }) => {
  let food = 0,
    home = 0,
    transport = 0,
    fun = 0,
    health = 0;
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    FinanceData.forEach((item) => {
      const itemCategory = item.category.toLowerCase();
      const value = item.value,
        filteredValue = value.toString().replace("$", "").replace(",", "."),
        realValue = Number(filteredValue);
      if (itemCategory === "food") {
        food += realValue;
      } else if (itemCategory === "home") {
        home += realValue;
      } else if (itemCategory === "fun") {
        fun += realValue;
      } else if (itemCategory === "health") {
        health += realValue;
      } else {
        transport += realValue;
      }
    });

    setFilteredCategory([food, home, fun, health, transport]);
  }, [FinanceData]);

  if (filteredCategory.length === 0) return <p>Loading chart...</p>;

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#929191",
        },
      },
    },
  };

  const data = {
    labels: ["Food", "Home", "Fun", "Health", "Transport"],
    datasets: [
      {
        label: "$",
        data: filteredCategory,
        backgroundColor: [
          "rgba(235, 222, 255, 0.7)",
          "rgba(180, 150, 255, 0.7)",
          "rgba(132, 94, 247, 0.7)",
          "rgba(90, 46, 179, 0.7)",
          "rgba(40, 20, 80, 0.7)",
        ],
        borderColor: [
          "rgba(235, 222, 255, 1)",
          "rgba(180, 150, 255, 1)",
          "rgba(132, 94, 247, 1)",
          "rgba(90, 46, 179, 1)",
          "rgba(40, 20, 80, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div id="container-chart">
      <h2 id="title" className="font-5xl">
        Monthly spend by category
      </h2>
      <Doughnut id="chart" data={data} options={options} />
    </div>
  );
};

export default Chart;
