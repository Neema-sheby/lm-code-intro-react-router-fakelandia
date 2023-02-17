import { screen, render } from "@testing-library/react";
import Option from "./Option";

it("renders the option component", () => {
  render(<Option value="I just want to talk" label="I just want to talk" />);

  const option = screen.getByRole("option");

  expect(option).toBeInTheDocument();
});

it("displays the value passed through props", () => {
  render(<Option value="I just want to talk" label="I just want to talk" />);

  const option = screen.getByRole("option");

  expect(option).toHaveValue("I just want to talk");
});
