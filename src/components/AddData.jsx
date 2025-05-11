import "../index.css";
import "./AddData.css";
import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import ButtonAdd from "./ButtonAdd";

function AddData() {
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
    <div>
      <form id="addData">
        <input
          type="text"
          id="name"
          name="Name"
          placeholder="Name"
          className="semibold cor-7 font-md"
        />

        <div id="category-container">
          <div className="select-ad">
            <div id="category-select">
              <input type="checkbox" id="options-view-button-ad" />

              <div id="select-button-ad">
                <div className="semibold cor-7 font-md" id="selected-value-ad">
                  CAT
                </div>

                <div id="chevrons-ad">
                  <ChevronDown id="chevron-down-ad" size={16} />
                  <ChevronUp id="chevron-up-ad" size={16} />
                </div>
              </div>
            </div>

            <ul id="options-ad" className="semibold cor-7 font-md">
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
          className="semibold cor-7 font-md"
          name="currency-input"
          placeholder="Value"
          decimalSeparator=","
          groupSeparator="."
          prefix="R$ "
          decimalsLimit={2}
        />

        <input type="date" name="date" id="date" className="medium cor-7 font-lg" />

      </form>

    <ButtonAdd />
     
    </div>
  );
}

export default AddData;
