import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextareaField from "./TextAreaField";

import { errMsgText } from "../ErrorHandler/ErrorMessages";

it("renders the textarea component", () => {
  render(
    <TextareaField
      id="confession-textarea"
      ContainerClassName="=textarea__confession-container"
      label=""
      value="I behaved rudely to a citzen in Fakelandia. I will make sure I don't do it next time. I will be kind to all the people of Fakelandia"
      placeholder="textarea"
      onChange={() => {}}
      onValidation={[]}
    />
  );

  const textarea = screen.getByRole("textbox", { name: "" });

  expect(textarea).toBeInTheDocument();
});

it("calls it's onChange function", async () => {
  const mock = jest.fn();

  render(
    <TextareaField
      id="confession-textarea"
      ContainerClassName="=textarea__confession-container"
      label=""
      value=""
      placeholder="textarea"
      onChange={mock}
      onValidation={[errMsgText.errCharCount]}
    />
  );

  const user = userEvent.setup();

  const textarea = screen.getByRole("textbox", { name: "" });

  //user enter the text
  await user.type(textarea, "I behaved rudely to a citzen in Fakelandia.");

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(43);
});

it("displays the value passed through props", () => {
  render(
    <TextareaField
      id="confession-textarea"
      ContainerClassName="=textarea__confession-container"
      label=""
      value="I behaved rudely to a citzen in Fakelandia. I will make sure I don't do it next time. I will be kind to all the people of Fakelandia"
      placeholder="textarea"
      onChange={() => {}}
      onValidation={[]}
    />
  );

  const textarea = screen.getByRole("textbox", { name: "" });

  expect(textarea).toHaveValue(
    "I behaved rudely to a citzen in Fakelandia. I will make sure I don't do it next time. I will be kind to all the people of Fakelandia"
  );
});

it("displays the error message passed through props", () => {
  render(
    <TextareaField
      id="confession-textarea"
      ContainerClassName="=textarea__confession-container"
      label=""
      value="Sorry"
      placeholder="textarea"
      onChange={() => {}}
      onValidation={[errMsgText.errCharCount]}
    />
  );

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgText.errCharCount);
});
