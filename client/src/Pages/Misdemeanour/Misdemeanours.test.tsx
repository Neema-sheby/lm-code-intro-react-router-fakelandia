import { screen, render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Misdemeanours from "./Misdemeanours";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MISDEMEANOUR_NUM } from "../../Configuration/Config";
import { ErrorMessagesAPI } from "../../Components/ErrorHandler/ErrorMessages";

const handlers = [
  rest.get(
    `http://localhost:8080/api/misdemeanours/${MISDEMEANOUR_NUM}`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          misdemeanours: [
            { citizenId: 16499, misdemeanour: "lift", date: "2/17/2023" },

            { citizenId: 476, misdemeanour: "lift", date: "2/17/2023" },

            { citizenId: 10635, misdemeanour: "rudeness", date: "2/17/2023" },

            { citizenId: 8725, misdemeanour: "rudeness", date: "2/17/2023" },
          ],
        })
      );
    }
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("is rendered in the document", () => {
  render(<Misdemeanours />);

  const misdemeanoursPage = screen.getByLabelText("misdemeanour-page");

  expect(misdemeanoursPage).toBeInTheDocument();
});

it("renders select field in the misdemeanours page", () => {
  render(<Misdemeanours />);

  const misdemeanoursPage = screen.getByLabelText("misdemeanour-page");

  const selectField = within(misdemeanoursPage).getByRole("combobox");

  expect(selectField).toBeInTheDocument();
});

it("filers the content in the table when an option is selected", async () => {
  render(<Misdemeanours />);
  const user = userEvent.setup();

  const misdemeanoursPage = screen.getByLabelText("misdemeanour-page");

  const selectField = within(misdemeanoursPage).getByRole("combobox");

  const tableBody = within(misdemeanoursPage).getAllByRole("rowgroup");

  await waitFor(() => within(tableBody[1]).getAllByRole("row"));

  await user.selectOptions(selectField, "rudeness 🤪");

  await waitFor(() => within(tableBody[1]).getAllByRole("row"));

  const rows = within(tableBody[1]).getAllByRole("row");

  expect(within(tableBody[1]).getAllByRole("row")).toHaveLength(2);
  rows.forEach((row) => {
    expect(row).toHaveTextContent("rudeness 🤪");
  });
});

it("renders 500 error status message", async () => {
  server.use(
    rest.get(
      `http://localhost:8080/api/misdemeanours/${MISDEMEANOUR_NUM}`,
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    )
  );
  render(<Misdemeanours />);

  const misdemeanoursPage = screen.getByLabelText("misdemeanour-page");

  const tableBody = within(misdemeanoursPage).getAllByRole("rowgroup");

  await waitFor(() =>
    within(tableBody[1]).getByLabelText("misdemeanour-error")
  );

  expect(
    within(tableBody[1]).getByLabelText("misdemeanour-error")
  ).toHaveTextContent(ErrorMessagesAPI.error500);
});

it("renders 404 error message when error status is 404", async () => {
  server.use(
    rest.get(
      `http://localhost:8080/api/misdemeanours/${MISDEMEANOUR_NUM}`,
      (req, res, ctx) => {
        return res(ctx.status(404));
      }
    )
  );
  render(<Misdemeanours />);

  const misdemeanoursPage = screen.getByLabelText("misdemeanour-page");

  const tableBody = within(misdemeanoursPage).getAllByRole("rowgroup");

  await waitFor(() =>
    within(tableBody[1]).getByLabelText("misdemeanour-error")
  );

  expect(
    within(tableBody[1]).getByLabelText("misdemeanour-error")
  ).toHaveTextContent(ErrorMessagesAPI.error404);
});

it("renders 418 error status message", async () => {
  server.use(
    rest.get(
      `http://localhost:8080/api/misdemeanours/${MISDEMEANOUR_NUM}`,
      (req, res, ctx) => {
        return res(ctx.status(418));
      }
    )
  );
  render(<Misdemeanours />);

  const misdemeanoursPage = screen.getByLabelText("misdemeanour-page");

  const tableBody = within(misdemeanoursPage).getAllByRole("rowgroup");

  await waitFor(() =>
    within(tableBody[1]).getByLabelText("misdemeanour-error")
  );

  expect(
    within(tableBody[1]).getByLabelText("misdemeanour-error")
  ).toHaveTextContent(ErrorMessagesAPI.error418);
});
