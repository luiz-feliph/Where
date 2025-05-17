import "../index.css";
import "./Header.css";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { useEffect, useState } from "react";

function Header({ month, setMonth, FinanceData }) {
  useEffect(() => {
    let selectedValue = document.getElementById("selected-value"),
      optionsViewButton = document.getElementById("options-view-button"),
      inputsOptions = document.querySelectorAll(".option input");

    const handler = (event) => {
      if (event.pointerType === "mouse" || event.pointerType === "touch") {
        setMonth(event.currentTarget.dataset.label);
        optionsViewButton.click();
      }
    };

    inputsOptions.forEach((input) => input.addEventListener("click", handler));

    return () => {
      inputsOptions.forEach((input) =>
        input.removeEventListener("click", handler)
      );
    };
  }, []);

  let total = 0;

  FinanceData.forEach((data) => {
    const value = data.value,
      filteredValue = value.toString().replace("$", "").replace(",", "."),
      realValue = Number(filteredValue);

    total += realValue;
  });

  return (
    <header>
      <div className="container">
        <div className="select">
          <div id="month-select">
            <input type="checkbox" id="options-view-button" />

            <div id="select-button">
              <div className="semibold" id="selected-value">
                {month}
              </div>

              <div id="chevrons">
                <ChevronDown id="chevron-down" size={16} />
                <ChevronUp id="chevron-up" size={16} />
              </div>
            </div>
          </div>

          <ul id="options" className="semibold">
            <li className="option">
              <input
                type="radio"
                name="month"
                value="january"
                data-label="January"
              />

              <span className="label">January</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input
                type="radio"
                name="month"
                value="february"
                data-label="February"
              />

              <span className="label">February</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input
                type="radio"
                name="month"
                value="march"
                data-label="March"
              />

              <span className="label">March</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input
                type="radio"
                name="month"
                value="april"
                data-label="April"
              />

              <span className="label">April</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input type="radio" name="month" value="may" data-label="May" />

              <span className="label">May</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input type="radio" name="month" value="june" data-label="June" />

              <span className="label">June</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input type="radio" name="month" value="july" data-label="July" />

              <span className="label">July</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input
                type="radio"
                name="month"
                value="august"
                data-label="August"
              />

              <span className="label">August</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input
                type="radio"
                name="month"
                value="september"
                data-label="September"
              />

              <span className="label">September</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input
                type="radio"
                name="month"
                value="october"
                data-label="October"
              />

              <span className="label">October</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input
                type="radio"
                name="month"
                value="november"
                data-label="November"
              />

              <span className="label">November</span>
              <Check id="check" size={16} />
            </li>
            <li className="option">
              <input
                type="radio"
                name="month"
                value="december"
                data-label="December"
              />

              <span className="label">December</span>
              <Check id="check" size={16} />
            </li>
          </ul>
        </div>

        <div className="total">
          <label className="font-md semibold">Total</label>
          <div className="total-bg">
            <p className="font-md">$ {total}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
