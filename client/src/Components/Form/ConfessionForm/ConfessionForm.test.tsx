import { screen, render, waitFor } from "@testing-library/react";
import ConfessionForm from "./ConfessionForm";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  errMsgSubject,
  errMsgReason,
  errMsgTextArea,
  ErrorMessagesAPI,
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
  details:
    "I behaved rudely to a citzen in Fakelandia. I will make sure I don't do it next time.",
};

//-------------------

it("is rendered in the document", () => {
  render(<ConfessionForm />);

  const form = screen.getByRole("form", { name: /form-confession/i });
  expect(form).toHaveClass("form");
});

it("have one input field, one select field, one text area and a button", () => {
  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");
  const selectField = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  expect(textBoxes[0]).toHaveClass("form__input");
  expect(textBoxes[1]).toHaveClass("form__textarea");
  expect(selectField).toHaveClass("form__select");
  expect(button).toHaveClass("button--form");
});

it("it has inputfield, selectfield and textarea set to default values after submitting form", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm />);

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

  expect(textBoxes[0]).toHaveValue("");
  expect(selectField).toHaveValue("");
  expect(textBoxes[1]).toHaveValue("");
});

//-------------------subject field test

it("displays error message for typing less than 10 characters subject field", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in input field
  await user.type(textBoxes[0], "I");

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgSubject.errCharCount);
});

it("displays error message for typing more than 30 characters in the subject field", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm />);

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

  render(<ConfessionForm />);

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

  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in input field
  await user.type(textBoxes[0], "neem/");

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgSubject.errValidString);
});

it("has button disabled for errors in subject field or leaving the field empty", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm />);

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

  render(<ConfessionForm />);

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

  render(<ConfessionForm />);

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

it("displays error message for typing less than 20 characters in the textarea", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in textarea field
  await user.type(textBoxes[1], "Sorry");

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgTextArea.errCharCount);
});

it("displays error message for typing more than 100 characters in the textarea", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in textarea field
  await user.type(
    textBoxes[1],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );

  const errorMsgItem = screen.getByRole("listitem");

  expect(errorMsgItem).toHaveTextContent(errMsgTextArea.errCharCount);
});

it("displays error messages for clearing the textarea after typing", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in textarea field
  await user.type(textBoxes[1], "Forgive me please. I will not repeat");

  //user clears textarea field
  await user.clear(textBoxes[1]);

  const errorMsgItems = screen.getAllByRole("listitem");

  expect(errorMsgItems[0]).toHaveTextContent(errMsgTextArea.errEmpty);
  expect(errorMsgItems[1]).toHaveTextContent(errMsgTextArea.errCharCount);
});

it("has button disabled if textarea values has errors", async () => {
  const user = userEvent.setup();

  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");

  //user types in textarea field
  await user.type(textBoxes[1], "we");

  const errorMsgItem = screen.getByRole("listitem");

  const button = screen.getByRole("button");

  expect(errorMsgItem).toHaveTextContent(errMsgTextArea.errCharCount);
  expect(button).toBeDisabled();
});

// //-------------------All fields
it("has button disabled if data entered in all the fields has errors", async () => {
  const user = userEvent.setup();
  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");
  const selectField = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  //user types in input field
  await user.type(textBoxes[0], "we");

  //user selects from select field
  await user.selectOptions(selectField, "");

  //user types in textarea
  await user.type(
    textBoxes[1],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );

  const errorMsgItem = screen.getAllByRole("listitem");

  expect(errorMsgItem[0]).toHaveTextContent(errMsgSubject.errCharCount);
  expect(errorMsgItem[1]).toHaveTextContent(errMsgReason.errNotSelected);
  expect(errorMsgItem[2]).toHaveTextContent(errMsgTextArea.errCharCount);

  expect(button).toBeDisabled();
});

it("has button enabled if the data entered in all the fields has no errors", async () => {
  const user = userEvent.setup();
  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");
  const selectField = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  //user types in input field
  await user.type(textBoxes[0], testData1.subject);

  //user selects from select field
  await user.selectOptions(selectField, testData1.reason);

  //user types in textarea
  await user.type(textBoxes[1], testData1.details);

  expect(button).not.toBeDisabled();
});

it("shows send message after receiving response fron server", async () => {
  const user = userEvent.setup();
  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");
  const selectField = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  //user types in input field
  await user.type(textBoxes[0], testData1.subject);

  //user selects from select field
  await user.selectOptions(selectField, testData1.reason);

  //user types in textarea
  await user.type(textBoxes[1], testData1.details);

  //user clicks button
  await user.click(button);

  jest.mock("../../GetPostData/Post.ts", () => ({
    fetchSomeData: jest.fn(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                success: true,
                justTalked: false,
                message: "Confession received.",
              }),
            1000
          )
        )
    ),
  }));

  await screen.findByText("✅ Message Send !");
  const msgSend = screen.getByRole("alert");

  expect(msgSend).toHaveTextContent("✅ Message Send !");
});

it("calls the error callback function on error from server and displays error message", async () => {
  const user = userEvent.setup();

  server.use(
    rest.post("http://localhost:8080/api/confess", (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  render(<ConfessionForm />);

  const textBoxes = screen.getAllByRole("textbox");
  const selectField = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  //user types in input field
  await user.type(textBoxes[0], testData1.subject);

  //user selects from select field
  await user.selectOptions(selectField, testData1.reason);

  //user types in textarea
  await user.type(textBoxes[1], testData1.details);

  //user clicks button
  await user.click(button);

  await screen.findByText(ErrorMessagesAPI.error404);

  const errorMsg = screen.getByRole("alert");

  expect(errorMsg).toHaveTextContent(ErrorMessagesAPI.error404);
});
