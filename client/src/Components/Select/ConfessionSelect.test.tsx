import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfessionSelect from "./ConfessionSelect";
import { errMsgReason } from "../ErrorHandler/ErrorMessages";

it("is rendered in the document", () => {
  render(
    <ConfessionSelect
      value="rudeness"
      onClick={() => {}}
      onChange={(e) => {}}
      onValidation={[]}
    />
  );

  const selectFieldConfession = screen.getByRole("combobox");

  expect(selectFieldConfession).toBeInTheDocument();
});

it("displays the value passed through props", () => {
  render(
    <ConfessionSelect
      value="rudeness"
      onClick={() => {}}
      onChange={() => {}}
      onValidation={[]}
    />
  );

  const selectFieldConfession = screen.getByRole("combobox");

  expect(selectFieldConfession).toHaveValue("rudeness");
});

it("calls it's onChange function", async () => {
  const mock = jest.fn();

  render(
    <ConfessionSelect
      value=""
      onClick={() => {}}
      onChange={mock}
      onValidation={[]}
    />
  );

  const user = userEvent.setup();

  const selectFieldConfession = screen.getByRole("combobox");

  //user selects an option
  await user.selectOptions(selectFieldConfession, "rudeness");

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(1);
});

it("calls it's onClick function", async () => {
  const mock = jest.fn();

  render(
    <ConfessionSelect
      value="rudeness"
      onClick={mock}
      onChange={() => {}}
      onValidation={[]}
    />
  );

  const user = userEvent.setup();

  const selectFieldConfession = screen.getByRole("combobox");

  //user selects clicks on select field
  await user.click(selectFieldConfession);

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(1);
});

it("displays the error message passed through props", () => {
  render(
    <ConfessionSelect
      value=""
      onClick={() => {}}
      onChange={() => {}}
      onValidation={[errMsgReason.errNotSelected]}
    />
  );

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgReason.errNotSelected);
});
