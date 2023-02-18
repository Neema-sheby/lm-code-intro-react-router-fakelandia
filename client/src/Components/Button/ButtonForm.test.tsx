import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./ButtonForm";

it("is rendered in the document", () => {
  render(<Button className="button__form" name="Confess" disabled={true} />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("Check if button is disabled", () => {
  render(<Button className="button__form" name="Confess" disabled={true} />);

  const button = screen.getByRole("button");

  expect(button).toBeDisabled();
});
