import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

it("is rendered in the document", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const header = screen.getByRole("banner");

  expect(header).toBeInTheDocument();
});

it("contains navigation bar", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const header = screen.getByRole("banner");
  const navBar = within(header).getAllByRole("navigation");

  expect(navBar[1]).toBeInTheDocument();
  expect(navBar[1]).toHaveClass("nav");
});
