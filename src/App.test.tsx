import { render, screen } from "@testing-library/react";
import App from "./App";

test("tips amount to be zero", () => {
  render(<App />);
  const tipAmount = screen.getByTestId("tip-amount");
  expect(tipAmount).not.toBeNull;
  expect(tipAmount).not.toBeNaN;
  expect(tipAmount).toHaveTextContent("0");
});
