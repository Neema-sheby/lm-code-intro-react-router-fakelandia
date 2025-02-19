import { screen, render } from "@testing-library/react";
import Confession from "./Confession";

it("is rendered in the document", () => {
  render(<Confession />);

  const confessionPage = screen.getByLabelText("confession-page");

  expect(confessionPage).toBeInTheDocument();
});

it("renders form in the confession page", () => {
  render(<Confession />);

  const confessionForm = screen.getByRole("form");

  expect(confessionForm).toBeInTheDocument();
});
