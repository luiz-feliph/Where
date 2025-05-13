import "../index.css";
import "./AddData.css";
import { useEffect, useState, useRef } from "react";
import CurrencyInput from "react-currency-input-field";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import axios from "axios";
import addIcon from "../assets/Add.svg";

function AddData({ getFinanceData, onEdit, setOnEdit }) {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const FinanceData = ref.current;

      FinanceData.name.value = onEdit.name;
      FinanceData.category.value = onEdit.category;
      FinanceData.value.value = onEdit.value;
      FinanceData.date.value = onEdit.date;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const FinanceData = ref.current;

    if (
      !FinanceData.name.value ||
      !FinanceData.category.value ||
      !FinanceData.value.value ||
      !FinanceData.date.value
    ) {
      return window.alert("Fill in all fields!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          name: FinanceData.name.value,
          category: FinanceData.category.value,
          value: FinanceData.value.value,
          date: FinanceData.date.value,
        })
        .then(({ data }) => console.log("sucess: " + data))
        .catch(({ data }) => console.log("error: " + data));
    } else {
      await axios
        .post("http://localhost:8800", {
          name: FinanceData.name.value,
          category: FinanceData.category.value,
          value: FinanceData.value.value,
          date: FinanceData.date.value,
        })
        .then(({ data }) => console.log("sucess: " + data))
        .catch(({ data }) => console.log("error: " + data));
    }

    FinanceData.name.value = "";
    FinanceData.category.value = "";
    FinanceData.value.value = "";
    FinanceData.date.value = "";

    setOnEdit(null);
    getFinanceData();
  };

  useEffect(() => {
    let selectedValueAd = document.getElementById("selected-value-ad"),
      optionsViewButtonAd = document.getElementById("options-view-button-ad"),
      inputsOptionsAd = document.querySelectorAll(".option-ad input");

    const handlerAd = (event) => {
      if (event.pointerType === "mouse" || event.pointerType === "touch") {
        selectedValueAd.textContent = event.currentTarget.dataset.label;
        optionsViewButtonAd.click();
      }
    };

    inputsOptionsAd.forEach((input) =>
      input.addEventListener("click", handlerAd)
    );

    return () => {
      inputsOptionsAd.forEach((input) =>
        input.removeEventListener("click", handlerAd)
      );
    };
  }, []);

  return (
      <form id="addData" ref={ref} onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="semibold font-md"
          autoComplete="off"
        />

        <div id="category-container">
          <div className="select-ad">
            <div id="category-select">
              <input type="checkbox" id="options-view-button-ad" />

              <div id="select-button-ad">
                <div className="semibold font-md" id="selected-value-ad">
                  CAT
                </div>

                <div id="chevrons-ad">
                  <ChevronDown id="chevron-down-ad" size={16} />
                  <ChevronUp id="chevron-up-ad" size={16} />
                </div>
              </div>
            </div>

            <ul id="options-ad" className="semibold font-md">
              <li className="option-ad">
                <input
                  type="radio"
                  name="category"
                  value="food"
                  data-label="Food"
                />

                <span className="label-ad"> Food</span>
              </li>

              <li className="option-ad">
                <input
                  type="radio"
                  name="category"
                  value="home"
                  data-label="Home"
                />

                <span className="label-ad">Home</span>
              </li>

              <li className="option-ad">
                <input
                  type="radio"
                  name="category"
                  value="transport"
                  data-label="Transport"
                />

                <span className="label-ad">Transport</span>
              </li>

              <li className="option-ad">
                <input
                  type="radio"
                  name="category"
                  value="fun"
                  data-label="Fun"
                />

                <span className="label-ad">Fun</span>
              </li>

              <li className="option-ad">
                <input
                  type="radio"
                  name="category"
                  value="health"
                  data-label="Health"
                />

                <span className="label-ad">Health</span>
              </li>
            </ul>
          </div>
        </div>

        <CurrencyInput
          id="currency-field"
          className="semibold font-md"
          name="value"
          placeholder="Value"
          decimalSeparator=","
          groupSeparator="."
          prefix="R$ "
          decimalsLimit={2}
          autoComplete="off"
        />

        <input
          type="date"
          name="date"
          id="date"
          className="medium font-lg"
        />

        <div className="btn-container">
          <button id="add-btn" type="submit">
            <img src={addIcon} alt="" />
          </button>
        </div>
      </form>
  );
}

export default AddData;
