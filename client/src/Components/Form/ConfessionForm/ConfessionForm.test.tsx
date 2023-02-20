import { screen, render, waitFor } from "@testing-library/react";
import ConfessionForm from "./ConfessionForm";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  errMsgSubject,
  errMsgReason,
  errMsgTextArea,
} from "../../ErrorHandler/ErrorMessages";

const handlers = [
  rest.post("http://localhost:8080/api/confess", async (req, res, ctx) => {
    const body = await req.json();
    const { subject, reason, details } = body;

    return res(
      ctx.json({
        success: true,
        justTalked: false,
        message: "Confession received.",
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mock = jest.fn();

//-------------------Test data

const testData1 = {
  subject: "confession",
  reason: "rudeness",
  details: "12345678",
};

//-------------------

it("is rendered in the document", () => {
  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const form = screen.getByRole("form", { name: /form-confession/i });
  expect(form).toHaveClass("form");
});

it("have one input field, one select field, one text area and a button", () => {
  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");
  const selectField = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  expect(textBoxes[0]).toHaveClass("input");
  expect(textBoxes[1]).toHaveClass("textarea");
  expect(selectField).toHaveClass("select__dropdown");
  expect(button).toHaveClass("button__form");
});

it("calls the addNewMisdemeanourData function and also has inputfield, selectfield and textarea set to default values after submitting form", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={mock} />);

  const textBoxes = screen.getAllByRole("textbox");
  const selectField = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  //user types in input field
  await user.type(textBoxes[0], testData1.subject);

  //user selects an option
  await user.selectOptions(selectField, testData1.reason);

  //user types in textarea
  await user.type(textBoxes[1], testData1.details);

  //user clicks on button
  await user.click(button);

  // wait to recieve response from server after posting data
  await waitFor(() => {
    expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(1);
  });

  expect(textBoxes[0]).toHaveValue("");
  expect(selectField).toHaveValue("");
  expect(textBoxes[1]).toHaveValue("");
});

//-------------------subject field test

it("displays error message for typing less than 10 characters subject field", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in input field
  await user.type(textBoxes[0], "I");

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgSubject.errCharCount);
});

it("displays error message for typing more than 30 characters in the subject field", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in input field
  await user.type(
    textBoxes[0],
    "I behaved rudely to a citzen in Fakelandia. I will not do it next time."
  );

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgSubject.errCharCount);
});

it("displays error messages for clearing the subject field after typing", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in input field
  await user.type(textBoxes[0], "Forgive me ?");

  //user clears input field
  await user.clear(textBoxes[0]);

  const errorMsgItems = screen.getAllByRole("listitem");

  expect(errorMsgItems[0]).toHaveTextContent(errMsgSubject.errEmpty);
  expect(errorMsgItems[1]).toHaveTextContent(errMsgSubject.errCharCount);
});

it("displays error message for typing back slash in the subject field", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in input field
  await user.type(textBoxes[0], "neem/");

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgSubject.errValidString);
});

it("has button disabled for errors in subject field or leaving the field empty", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in input field
  await user.type(textBoxes[0], "neem/");

  const errorMsgItem = screen.getByRole("listitem");
  const button = screen.getByRole("button");

  expect(errorMsgItem).toHaveTextContent(errMsgSubject.errValidString);
  expect(button).toBeDisabled();
});

//-------------------select field test

it("displays error message for not selecting an option", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  const selectField = screen.getByRole("combobox");

  //user clicks on select
  await user.click(selectField);

  //user selects an option
  await user.selectOptions(selectField, "");

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgReason.errNotSelected);
});

it("has button disabled for not selecting an option", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const selectField = screen.getByRole("combobox");

  //user clicks on select field
  await user.click(selectField);

  //user selects an option
  await user.selectOptions(selectField, "");

  const errorMsgItem = screen.getByRole("listitem");
  const button = screen.getByRole("button");

  expect(errorMsgItem).toHaveTextContent(errMsgReason.errNotSelected);
  expect(button).toBeDisabled();
});
//-------------------textarea field test

it("displays error message for entering a single digit number in textarea", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in textarea field
  await user.type(textBoxes[1], "6");

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgTextArea.errDigitCount);
});

it("displays error message for typing an alphabet in the textarea", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in textarea field
  await user.type(textBoxes[1], "A");

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgTextArea.errValidNumber);
});

it("displays error messages for clearing the textarea after typing", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in textarea field
  await user.type(textBoxes[1], "1112");

  //user clears textarea field
  await user.clear(textBoxes[1]);

  const errorMsgItems = screen.getAllByRole("listitem");

  expect(errorMsgItems[0]).toHaveTextContent(errMsgTextArea.errEmpty);
  expect(errorMsgItems[1]).toHaveTextContent(errMsgTextArea.errValidNumber);
});

it("has button disabled if data entered in textarea has errors", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in textarea field
  await user.type(textBoxes[1], "w");

  const errorMsgItem = screen.getByRole("listitem");

  const button = screen.getByRole("button");

  expect(errorMsgItem).toHaveTextContent(errMsgTextArea.errValidNumber);
  expect(button).toBeDisabled();
});

// //-------------------All fields
it("has button disabled if data entered in all the fields has errors", async () => {
  const user = userEvent.setup();
  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");
  const selectField = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  //user types in input field
  await user.type(textBoxes[0], "we");

  //user selects from select field
  await user.selectOptions(selectField, "");

  //user types in textarea
  await user.type(textBoxes[1], "1");

  const errorMsgItem = screen.getAllByRole("listitem");

  expect(errorMsgItem[0]).toHaveTextContent(errMsgSubject.errCharCount);
  expect(errorMsgItem[1]).toHaveTextContent(errMsgReason.errNotSelected);
  expect(errorMsgItem[2]).toHaveTextContent(errMsgTextArea.errDigitCount);
  // screen.debug();
  expect(button).toBeDisabled();
});

it("has button enabled if the data entered in all the fields has no errors", async () => {
  const user = userEvent.setup();
  render(<ConfessionForm setNewMisdemeanourOfMisdemeanant={() => {}} />);

  const textBoxes = screen.getAllByRole("textbox");
  const selectField = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  //user types in input field
  await user.type(textBoxes[0], " behaved rudely to a citizen !");

  //user selects from select field
  await user.selectOptions(selectField, "rudeness");

  //user types in textarea
  await user.type(textBoxes[1], "100054");

  expect(button).not.toBeDisabled();
});
