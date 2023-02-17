import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./InputField";

import { errMsgSubject } from "../ErrorHandler/ErrorMessages";

it("renders the input component", () => {
  render(
    <InputField
      id="confession-subject"
      ContainerClassName="input__confession-container"
      label="subject"
      value="Confession"
      placeholder="Input"
      onChange={() => {}}
      onValidation={[]}
    />
  );

  const subjectField = screen.getByRole("textbox", { name: /subject/i });

  expect(subjectField).toBeInTheDocument();
});

it("calls it's onChange function", async () => {
  const mock = jest.fn();

  render(
    <InputField
      id="confession-subject"
      ContainerClassName="input__confession-container"
      label="subject"
      value=""
      placeholder="Input"
      onChange={mock}
      onValidation={[]}
    />
  );

  const user = userEvent.setup();

  const input = screen.getByRole("textbox", { name: /subject/i });

  //user enter the input
  await user.type(input, "Confession");

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(10);
});

it("displays the value passed through props", () => {
  render(
    <InputField
      id="confession-subject"
      ContainerClassName="input__confession-container"
      label="subject"
      value="Confession"
      placeholder="Input"
      onChange={() => {}}
      onValidation={[]}
    />
  );

  const input = screen.getByRole("textbox", { name: /subject/i });

  expect(input).toHaveValue("Confession");
});

it("displays the error message passed through props", () => {
  render(
    <InputField
      id="confession-subject"
      ContainerClassName="input__confession-container"
      label="subject"
      value=""
      placeholder="Input"
      onChange={() => {}}
      onValidation={[errMsgSubject.errCharCount]}
    />
  );

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgSubject.errCharCount);
});
