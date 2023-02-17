import { screen, render } from "@testing-library/react";
import Confession from "./Confession";

it("renders confession page", () => {
  render(<Confession />);

  const confessionPage = screen.getByRole("textbox", { name: /subject/i });

  expect(confessionPage).toBeInTheDocument();
});

it("renders form in the confession page", () => {
  render(<Confession />);

  const confessionForm = screen.getByRole("form");

  expect(confessionForm).toBeInTheDocument();
});
