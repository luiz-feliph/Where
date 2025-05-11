import "../index.css";
import "./ButtonAdd.css";
import addIcon from "../assets/Add.svg";
import { useEffect, useState } from "react";

function ButtonAdd() {
  
  const [dataInfo, setDataInfo] = useState();

  return (
     <div className="btn-container">
        <button id="add-btn">
          <img src={addIcon} alt="" />
        </button>
      </div>
  );
}

export default ButtonAdd;
