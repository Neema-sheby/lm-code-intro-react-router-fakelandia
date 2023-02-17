import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./ButtonForm";

it("renders the button", () => {
  render(<Button className="button__form" name="Confess" disabled={true} />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
