import { screen, render, within } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Nav from "./Navigation";

it("renders navigation component", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  const navigation = screen.getByRole("navigation");
  expect(navigation).toBeInTheDocument();
});

it("it renders home page when user clicks on home navigation link", async () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const user = userEvent.setup();
  const navListLinks = screen.getAllByRole("listitem");
  const homePageLink = within(navListLinks[0]).getByRole("link");

  // user clicks on the home page link
  await user.click(homePageLink);

  const currentPagePathName = window.location.pathname;

  expect(currentPagePathName).toBe("/");
});

it("it renders misdemeanours page when user clicks on misdemeanours navigation link", async () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const user = userEvent.setup();
  const navListLinks = screen.getAllByRole("listitem");
  const misdemeanoursPageLink = within(navListLinks[1]).getByRole("link");

  // user clicks on the midemeanours page link
  await user.click(misdemeanoursPageLink);

  const currentPagePathName = window.location.pathname;

  expect(currentPagePathName).toBe("/misdemeanours");
});

it("it renders confession page when user clicks on confession navigation link", async () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const user = userEvent.setup();
  const navListLinks = screen.getAllByRole("listitem");
  const confessionPageLink = within(navListLinks[2]).getByRole("link");

  // user clicks on the confession page link
  await user.click(confessionPageLink);

  const currentPagePathName = window.location.pathname;

  expect(currentPagePathName).toBe("/confession");
});
