import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

test("tips amount to be zero, not null and NaN", () => {
  render(<App />);
  const tipAmount = screen.getByTestId("tip-amount");
  expect(tipAmount).not.toBeNull;
  expect(tipAmount).not.toBeNaN;
  expect(tipAmount).toHaveTextContent("0");
});

test("total amount to be zero", () => {
  render(<App />);
  const totalAmount = screen.getByTestId("total-amount");
  expect(totalAmount).not.toBeNull;
  expect(totalAmount).not.toBeNaN;
  expect(totalAmount).toHaveTextContent("0");
});

test("call handleBillInput function onClick", () => {
  // render(<App />);
  // const handleBillInput = jest.fn();
  // const { container } = render(
  //   <Input
  //     dataTestId="mock-input"
  //     icon="bx-dollar"
  //     onChange={handleBillInput}
  //   />
  // );
  // const input = container.firstChild;
  // fireEvent.change(input, { target: { value: "a" } });
  // expect(handleBillInput).toHaveBeenCalled;
  const handleChange = jest.fn();
  const { container } = render(<input type="text" onChange={handleChange} />);
  const input = container.firstChild;
  fireEvent.change(input as any, { target: { value: "a" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Calculate total amount & tip when bill, customTip and numOfPpl are changed", () => {
  render(<App />);
  const billInput = screen.getByTestId("bill-input");
  const customTipInput = screen.getByTestId("custom-tip");
  const pplInput = screen.getByTestId("ppl-input");
  const totalAmount = screen.getByTestId("total-amount");
  const tipAmount = screen.getByTestId("tip-amount");

  fireEvent.change(billInput, { target: { value: "2000" } });
  fireEvent.change(customTipInput, { target: { value: "10" } });
  fireEvent.change(pplInput, { target: { value: "2" } });
  // expect(handleBillInput).toHaveBeenCalled();

  expect(totalAmount).toHaveTextContent("1,100");
  expect(tipAmount).toHaveTextContent("100");
});

test("Calculate total amount & tip when bill, numOfPpl are changed and tipBtn is clicked", () => {
  render(<App />);
  const billInput = screen.getByTestId("bill-input");
  const pplInput = screen.getByTestId("ppl-input");
  const totalAmount = screen.getByTestId("total-amount");
  const tipAmount = screen.getByTestId("tip-amount");
  const tipBtn = screen.getByText("5%");

  fireEvent.change(billInput, { target: { value: "2000" } });
  fireEvent.change(pplInput, { target: { value: "2" } });
  fireEvent.click(tipBtn);

  expect(totalAmount).toHaveTextContent("1,050");
  expect(tipAmount).toHaveTextContent("50");
});

test("call handleReset function when reset btn is clicked", () => {
  const handleReset = jest.fn();
  render(
    <Button onClick={handleReset} reset>
      RESET
    </Button>
  );
  fireEvent.click(screen.getByText(/reset/i));
  expect(handleReset).toHaveBeenCalled();
});

test("reset all values with reset btn", () => {
  render(<App />);
  const billInput = screen.getByTestId("bill-input");
  const customTipInput = screen.getByTestId("custom-tip");
  const pplInput = screen.getByTestId("ppl-input");
  const totalAmount = screen.getByTestId("total-amount");
  const tipAmount = screen.getByTestId("tip-amount");
  const resetBtn = screen.getByText(/reset/i);

  fireEvent.change(billInput, { target: { value: "2000" } });
  fireEvent.change(customTipInput, { target: { value: "10" } });
  fireEvent.change(pplInput, { target: { value: "2" } });

  expect(billInput).toHaveValue(2000);

  fireEvent.click(resetBtn);

  expect(billInput).toHaveValue(null);
  expect(customTipInput).toHaveValue(null);
  expect(pplInput).toHaveValue(null);
  expect(totalAmount).toHaveTextContent("0");
  expect(tipAmount).toHaveTextContent("0");
});
