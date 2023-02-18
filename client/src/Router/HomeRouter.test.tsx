import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import HomeRouter from "./HomeRouter";

it("renders the home page by default", () => {
  render(
    <BrowserRouter>
      <HomeRouter />
    </BrowserRouter>
  );

  const home = screen.getByText(
    "Welcome to the home of the Justice Department of Fakelandia"
  );
  expect(home).toBeInTheDocument();
});

it("renders the misdemeanours page when the user clicks on misdemeanours Link", async () => {
  render(
    <BrowserRouter>
      <HomeRouter />
    </BrowserRouter>
  );

  const user = userEvent.setup();
  const misdemeanourLink = screen.getByLabelText("misdemeanours");

  //user clicks on the misdemeanour Link
  await user.click(misdemeanourLink);

  const misdemeanourPage = screen.getByText("Punishment Idea");

  expect(misdemeanourPage).toBeInTheDocument();
});

it("renders the confession page when the user clicks on confession Link", async () => {
  render(
    <BrowserRouter>
      <HomeRouter />
    </BrowserRouter>
  );

  const user = userEvent.setup();
  const confessionLink = screen.getByLabelText("confession");

  //user clicks on the confession Link
  await user.click(confessionLink);

  const confessionPage = screen.getByText(
    "It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly."
  );

  expect(confessionPage).toBeInTheDocument();
});
