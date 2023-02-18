import { screen, render, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import HomeRouter from "./HomeRouter";
import { createMemoryHistory } from "history";

it("renders the home page by default", () => {
  render(
    <BrowserRouter>
      <HomeRouter />
    </BrowserRouter>
  );

  const home = screen.getByText(/Welcome to the home of the Justice/i);
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
    /It's very difficult to catch people committing misdemeanours/i
  );

  expect(confessionPage).toBeInTheDocument();
});

it("renders the not found page when the user navigates to an invalid path", () => {
  const history = createMemoryHistory();
  history.push("/invalid-path");

  //simulate user navigating to invalid path
  render(
    <MemoryRouter initialEntries={["/invalid"]}>
      <HomeRouter />
    </MemoryRouter>
  );

  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
