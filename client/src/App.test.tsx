import { screen, render } from "@testing-library/react";
import App from "./App";

it("is rendered in the document", () => {
  render(<App />);

  const container = screen.getByLabelText("container");

  expect(container).toBeInTheDocument();
});

it("renders the home page by default", () => {
  render(<App />);

  const home = screen.getByText(
    "Welcome to the home of the Justice Department of Fakelandia"
  );

  expect(home).toBeInTheDocument();
});
