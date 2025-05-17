import "../index.css";
import "./Chart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

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
          "rgb(207, 191, 230)",
          "rgba(180, 150, 255, 0.7)",
          "rgba(132, 94, 247, 0.7)",
          "rgba(90, 46, 179, 0.7)",
          "rgba(40, 20, 80, 0.7)",
        ],
        borderColor: [
          "rgb(207, 191, 230)",
          "rgba(180, 150, 255, 1)",
          "rgba(132, 94, 247, 1)",
          "rgba(90, 46, 179, 1)",
          "rgba(40, 20, 80, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const viewButton = document.getElementById("options-view-button-vc");
    const chartContainer = document.getElementById("container-chart");

    const toggleChart = () => {
      if (viewButton.checked) {
        chartContainer.classList.remove("hidden");
      } else {
        chartContainer.classList.add("hidden");
      }
    };

    toggleChart();

    viewButton.addEventListener("change", toggleChart);

    return () => {
      viewButton.removeEventListener("change", toggleChart);
    };
  }, []);

  return (
    <div id="view-chart-container">
      <div id="view-button">
        <input type="checkbox" id="options-view-button-vc" />
        <div id="view-chart">
          <h1 className="font-5xl">Chart</h1>
          <div id="chevrons-vc">
            <ChevronDown id="chevron-down-vc" size={20} />
            <ChevronUp id="chevron-up-vc" size={20} />
          </div>
        </div>
      </div>
      <div id="container-chart" className="hidden">
        <h2 id="title" className="font-4xl">
          Monthly spend by category
        </h2>
        <Doughnut id="chart" data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
