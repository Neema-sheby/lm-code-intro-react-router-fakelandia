import { screen, render, within } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Nav from "./Navigation";

it("is rendered in the document", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  const navigation = screen.getByRole("navigation");
  expect(navigation).toBeInTheDocument();
});

it("it renders home page when user clicks on home navigation link and an `active` class name is added to the link when it is active", async () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const user = userEvent.setup();
  const navListLinks = screen.getAllByRole("listitem");
  const homePageLink = within(navListLinks[0]).getByRole("link", {
    name: /home/i,
  });

  // user clicks on the home page link
  await user.click(homePageLink);

  const currentPagePathName = window.location.pathname;

  expect(currentPagePathName).toBe("/");
  expect(homePageLink).toHaveClass("active");
});

it("it renders misdemeanours page when user clicks on misdemeanours navigation link and an `active` class name is added to the link when it is active", async () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const user = userEvent.setup();
  const navListLinks = screen.getAllByRole("listitem");
  const misdemeanoursPageLink = within(navListLinks[1]).getByRole("link", {
    name: /misdemeanours/i,
  });

  expect(misdemeanoursPageLink).not.toHaveClass("active");

  // user clicks on the midemeanours page link
  await user.click(misdemeanoursPageLink);

  const currentPagePathName = window.location.pathname;

  expect(currentPagePathName).toBe("/misdemeanours");
  expect(misdemeanoursPageLink).toHaveClass("active");
});

it("it renders confession page when user clicks on confession navigation link and an `active` class name is added to the link when it is active", async () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const user = userEvent.setup();
  const navListLinks = screen.getAllByRole("listitem");
  const confessionPageLink = within(navListLinks[2]).getByRole("link", {
    name: /confession/i,
  });

  expect(confessionPageLink).not.toHaveClass("active");

  // user clicks on the confession page link
  await user.click(confessionPageLink);

  const currentPagePathName = window.location.pathname;

  expect(currentPagePathName).toBe("/confession");
  expect(confessionPageLink).toHaveClass("active");
});
