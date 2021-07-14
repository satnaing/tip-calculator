import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

test("Make sure input is not a negative number", () => {
  let inputValue = "";
  const handleInput = jest.fn();
  render(
    <Input
      dataTestId="test-input"
      icon="bx-dollar"
      onChange={handleInput}
      value={inputValue}
    />
  );
  const testInput = screen.getByTestId("test-input");
  fireEvent.change(testInput, { target: { value: "1" } });
  // expect(testInput).toHaveValue("1");

  // fireEvent.change(testInput, { target: { value: "1" } });
  // expect(testInput).toHaveValue(null);
  // expect(tipAmount).not.toBeNaN;
  // expect(tipAmount).toHaveTextContent("0");
});
