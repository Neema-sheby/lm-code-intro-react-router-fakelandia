import { screen, render, within } from "@testing-library/react";
import Home from "./Home";

it("is rendered in the document", () => {
  render(<Home />);

  const homePage = screen.getByLabelText("home-page");

  expect(homePage).toBeInTheDocument();
});

it("renders form in the confession page", () => {
  render(<Home />);

  const homePage = screen.getByLabelText("home-page");
  const heading = within(homePage).getByRole("heading");

  expect(heading).toHaveTextContent(
    "Welcome to the home of the Justice Department of Fakelandia"
  );
});
