import { screen, render, within } from "@testing-library/react";
import ErrorComponent from "./ErrorComponent";

it("renders the error component", () => {
  render(
    <ErrorComponent
      errorMessage={[
        "⛔️ Error : Field is empty !",
        "⛔️ Error : Number of Characters must be between 10 and 50 characters !",
      ]}
    />
  );

  const errorMsgList = screen.getByRole("list");

  expect(errorMsgList).toBeInTheDocument();
});

it("renders the error message", () => {
  render(
    <ErrorComponent
      errorMessage={[
        "⛔️ Error : Field is empty !",
        "⛔️ Error : Number of Characters must be between 10 and 50 characters !",
      ]}
    />
  );
  const errorMsgItems = screen.getAllByRole("listitem");

  expect(errorMsgItems[0]).toHaveTextContent("⛔️ Error : Field is empty !");
  expect(errorMsgItems[1]).toHaveTextContent(
    "⛔️ Error : Number of Characters must be between 10 and 50 characters !"
  );
});
