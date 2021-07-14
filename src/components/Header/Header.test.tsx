import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("correct header text", () => {
  render(<Header />);
  const headerTextTop = screen.getByText(/split/i);
  const headerTextBottom = screen.getByText(/tter/i);
  expect(headerTextTop).toBeInTheDocument();
  expect(headerTextBottom).toBeInTheDocument();
});
