import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Input from "./Input";

test("Input working and allows number", () => {
  const handleChange = jest.fn();
  render(
    <Input
      icon="bx-dollar"
      dataTestId="input-element"
      onChange={handleChange}
    />
  );
  const inputTest = screen.getByTestId("input-element");

  // userEvent.type(inputTest, "1234");

  expect(inputTest).toBeTruthy();
  fireEvent.change(inputTest, { target: { value: "1234" } });

  expect((inputTest as HTMLInputElement).value).toBe("1234");
});

test("Input not allows text by default", () => {
  render(<Input icon="bx-dollar" dataTestId="num-input" />);
  const numInput = screen.getByTestId("num-input");

  fireEvent.change(numInput, { target: { value: "text not allowed" } });
  expect((numInput as HTMLInputElement).value).toBe("");
});
