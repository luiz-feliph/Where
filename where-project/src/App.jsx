import "./index.css";
import "./App.css";
import Header from "./components/Header";
import AddData from "./components/AddData";
import DataTable from "./components/DataTable";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [FinanceData, setFinanceData] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getFinanceData = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setFinanceData(res.data.sort((a, b) => (a.date > b.date ? 1 : -1)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFinanceData();
  }, []);

  const [month, setMonth] = useState("");

  useEffect(() => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    setMonth(month);
  }, []);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = FinanceData.filter((item) => {
      const itemDate = new Date(item.date);
      const itemMonth = itemDate.toLocaleString("default", { month: "long" });
     if (itemMonth === month) {
      return item
     };
    });

    setFilteredData(filtered);
  }, [FinanceData, month]);

  return (
    <div>
      <Header month={month} setMonth={setMonth} />
      <AddData
        onEdit={onEdit}
        setOnEdit={setOnEdit}
        getFinanceData={getFinanceData}
      />
      <DataTable
        setOnEdit={setOnEdit}
        FinanceData={filteredData}
        setFinanceData={setFinanceData}
        month={month}
        setMonth={setMonth}
      />
    </div>
  );
}

export default App;
