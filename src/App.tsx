import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import "./App.scss";
import React, { useEffect, useState } from "react";

const percents = [5, 10, 15, 25, 50];

function App() {
  const [bill, setBill] = useState<number | string>("");
  const [tipPercent, setTipPercent] = useState<undefined | number>(undefined);
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
    // e.currentTarget.classList.add("tip__selected");
  };

  const handleNumOfPpl = (e: React.FormEvent<HTMLInputElement>) => {
    const num = parseInt(e.currentTarget.value);
    setNumPpl(num);
  };

  const handleReset = () => {
    setBill("");
    setTipPercent(undefined);
    setNumPpl(0);
    setTipAmount(0);
    setTotalAmount(0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (
      bill !== 0 &&
      tipPercent !== undefined &&
      numPpl !== 0 &&
      numPpl !== ""
    ) {
      const currentBill = bill as number;
      const currentNumPeople = numPpl as number;

      const tipPerPerson =
        ((currentBill / 100) * tipPercent) / currentNumPeople;
      const totalTipAmount = (currentBill / 100) * tipPercent;
      const totalPerPerson = (currentBill + totalTipAmount) / currentNumPeople;

      setTipAmount(tipPerPerson.toLocaleString());
      setTotalAmount(totalPerPerson.toLocaleString());
    }
  }, [bill, tipPercent, numPpl, setTipAmount]);

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
              value={isNaN(bill as number) ? 0 : bill}
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
                type="text"
                className="tip__custom"
                id="tip"
                placeholder="Custom"
              />
            </div>
          </div>

          <div className="num__ppl__container">
            <label htmlFor="num-of-people">Number of People</label>
            <span className="text__error">Can't be Zero</span>
            {/* <input type="text" onChange /> */}
            <Input
              icon="bxs-user"
              inputId="num-of-people"
              // error
              onChange={handleNumOfPpl}
              extraClass="input__ppl"
              value={isNaN(numPpl as number) ? 0 : numPpl}
            />
          </div>

          <div className="result__container">
            <div className="tip__amount amount__container">
              <h3 className="amount__title">Tip Amount</h3>
              <span className="per__person">/ person</span>
              <span className="amount">{tipAmount}</span>
              {/* $4.27 */}
            </div>
            <div className="total__amount amount__container">
              <h3 className="amount__title">Total</h3>
              <span className="per__person">/ person</span>
              <span className="amount">{totalAmount}</span>
              {/* $32.79 */}
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
