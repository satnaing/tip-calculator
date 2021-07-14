import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import "./App.scss";
import React, { useEffect, useState } from "react";

const percents = [5, 10, 15, 25, 50];

function App() {
  const [bill, setBill] = useState<number | string>("");
  const [tipPercent, setTipPercent] = useState<undefined | number>(undefined);
  const [customTip, setCustomTip] = useState<number | string>("");
  const [numPpl, setNumPpl] = useState<number | string>("");

  const [tipAmount, setTipAmount] = useState<number | string>(0);
  const [totalAmount, setTotalAmount] = useState<number | string>(0);

  const handleBillInput = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.currentTarget.value);
    setBill(inputValue);
  };

  const handleTipBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    amount: number
  ) => {
    setTipPercent(amount);
    setCustomTip("");
  };

  const handleCustomTip = (e: React.FormEvent<HTMLInputElement>) => {
    const tipValue = parseFloat(e.currentTarget.value);
    setTipPercent(undefined);
    if (tipValue >= 0 && tipValue <= 100) setCustomTip(tipValue);
  };

  const handleNumOfPpl = (e: React.FormEvent<HTMLInputElement>) => {
    const num = parseInt(e.currentTarget.value);
    setNumPpl(num);
  };

  const handleReset = () => {
    setBill("");
    setCustomTip("");
    setTipPercent(undefined);
    setNumPpl("");
    setTipAmount(0);
    setTotalAmount(0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (bill === 0) return;
    if (tipPercent === undefined && customTip === "") return;
    if (numPpl === 0 || numPpl === "") return;

    let tipValue;
    tipPercent
      ? (tipValue = tipPercent as number)
      : (tipValue = customTip as number);

    const currentBill = bill as number;
    const currentNumPeople = numPpl as number;

    const tipPerPerson = ((currentBill / 100) * tipValue) / currentNumPeople;
    const totalTipAmount = (currentBill / 100) * tipValue;
    const totalPerPerson = (currentBill + totalTipAmount) / currentNumPeople;

    setTipAmount(tipPerPerson.toLocaleString());
    setTotalAmount(totalPerPerson.toLocaleString());
  }, [bill, tipPercent, numPpl, customTip, setTipAmount]);

  return (
    <>
      <Header />
      <main className="app__container">
        <form onSubmit={handleSubmit} action="" className="app__form">
          <div className="bill__container">
            <label htmlFor="bill">Bill</label>
            <Input
              inputId="bill"
              icon="bx-dollar"
              onChange={handleBillInput}
              value={isNaN(bill as number) ? "" : bill}
            />
          </div>

          <div className="tip__container">
            <label htmlFor="tip">Select Tip %</label>
            <div className="tip__inputs">
              {percents.map((percent) => {
                let selected = false;
                tipPercent === percent ? (selected = true) : (selected = false);
                return (
                  <Button
                    key={percent}
                    selected={selected}
                    onClick={(e) => handleTipBtn(e, percent)}
                  >
                    {percent}%
                  </Button>
                );
              })}
              <input
                type="number"
                className="tip__custom"
                id="tip"
                placeholder="Custom"
                min="1"
                max="5"
                onChange={handleCustomTip}
                value={isNaN(customTip as number) ? "" : customTip}
              />
            </div>
          </div>

          <div className="num__ppl__container">
            <label htmlFor="num-of-people">Number of People</label>
            {/* <span className="text__error">Can't be Zero</span> */}
            <Input
              icon="bxs-user"
              inputId="num-of-people"
              // error
              onChange={handleNumOfPpl}
              extraClass="input__ppl"
              value={isNaN(numPpl as number) ? "" : numPpl}
            />
          </div>

          <div className="result__container">
            <div className="tip__amount amount__container">
              <h2 className="amount__title">Tip Amount</h2>
              <span className="per__person">/ person</span>
              <span className="amount">
                {isNaN(tipAmount as number) ? 0 : tipAmount}
              </span>
            </div>
            <div className="total__amount amount__container">
              <h2 className="amount__title">Total</h2>
              <span className="per__person">/ person</span>
              <span className="amount">
                {isNaN(totalAmount as number) ? 0 : totalAmount}
              </span>
            </div>
            <Button onClick={handleReset} reset>
              RESET
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
