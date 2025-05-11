import '../index.css'
import './Home.css'
import Header from '../components/Header'
import AddData from '../components/AddData'
import DataTable from '../components/DataTable'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {

  const [FinanceData, setFinanceData] = useState([]);
  const [onEdit, setOnEdit] = useState(null)

  const getFinanceData = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setFinanceData(res.data.sort((a, b) => (a.date > b.date ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

useEffect(() => {
  toast.success("Toast funcionando!");
  getFinanceData();
}, []);
  

  return (
      <div>
        <ToastContainer position="bottom-right"/>
        <Header />
        <AddData />
        <DataTable FinanceData={FinanceData}/>
      </div>
  )
}

export default Home