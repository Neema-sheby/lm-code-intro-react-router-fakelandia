import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

it("is rendered in the document", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  const footer = screen.getByRole("contentinfo");

  expect(footer).toBeInTheDocument();
});

it("contains logo which is the link to home page", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  const footer = screen.getByRole("contentinfo");
  const navLink = within(footer).getByRole("link");

  const logo = screen.getAllByRole("img");

  expect(navLink).toBeInTheDocument();
  expect(logo[0]).toBeInTheDocument();
  expect(logo[1]).toBeInTheDocument();
});
