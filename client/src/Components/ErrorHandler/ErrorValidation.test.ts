import { errMsgSubject, errMsgReason, errMsgTextArea } from "./ErrorMessages";
import {
  validateSubject,
  validateReasonSelection,
  validateTextArea,
} from "./ErrorValidation";

describe("Checking the data entered in the subject field", () => {
  test(`returns [${errMsgSubject.errValidString}] for entering numbers`, () => {
    expect(validateSubject("confess123")).toStrictEqual([
      errMsgSubject.errValidString,
    ]);
  });

  test(`returns [${errMsgSubject.errValidString}] for entering special character - /`, () => {
    expect(validateSubject("confess/")).toStrictEqual([
      errMsgSubject.errValidString,
    ]);
  });

  test(`returns [${errMsgSubject.errValidString}] for entering special character - <`, () => {
    expect(validateSubject("confess<")).toStrictEqual([
      errMsgSubject.errValidString,
    ]);
  });

  test(`returns [${errMsgSubject.errValidString}] for entering special character - +`, () => {
    expect(validateSubject("confess+")).toStrictEqual([
      errMsgSubject.errValidString,
    ]);
  });

  test(`returns [${errMsgSubject.errValidString}] for entering special character - &`, () => {
    expect(validateSubject("confess&")).toStrictEqual([
      errMsgSubject.errValidString,
    ]);
  });

  test(`returns [${errMsgSubject.errCharCount}] for entering less than 10 characters`, () => {
    expect(validateSubject("I")).toStrictEqual([errMsgSubject.errCharCount]);
  });

  test(`returns [${errMsgSubject.errCharCount}] for entering more than 30 characters`, () => {
    expect(
      validateSubject(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      )
    ).toStrictEqual([errMsgSubject.errCharCount]);
  });

  test(`returns [${errMsgSubject.errEmpty},${errMsgSubject.errCharCount}] for empty subject field`, () => {
    expect(validateSubject("")).toStrictEqual([
      errMsgSubject.errEmpty,
      errMsgSubject.errCharCount,
    ]);
  });

  test(`returns an empty array for entering the special character '?' or empty spaces between words`, () => {
    expect(validateSubject("Can I get a last chance?")).toStrictEqual([]);
  });

  test(`returns an empty array for entering the special character '.' in the end of a sentence`, () => {
    expect(validateSubject("Please give me a last chance.")).toStrictEqual([]);
  });

  test(`returns an empty array for entering the special character '!' in the end of a sentence`, () => {
    expect(validateSubject("Please forgive me!")).toStrictEqual([]);
  });

  test(`returns an empty array for entering the special character ',' in the sentence`, () => {
    expect(validateSubject("Forgive me, Dora and my dog")).toStrictEqual([]);
  });

  test(`returns an empty array for entering the subject as per validation rules`, () => {
    expect(validateSubject("confession")).toStrictEqual([]);
  });
});

describe("Checking select field of confession form", () => {
  test(`returns [${errMsgReason.errNotSelected}] for not selecting an option`, () => {
    expect(validateReasonSelection("")).toStrictEqual([
      errMsgReason.errNotSelected,
    ]);
  });

  test("returns an empty array for selecting the correct option", () => {
    expect(validateReasonSelection("rudeness")).toStrictEqual([]);
  });
});

describe("Checking the data entered in the textarea", () => {
  test(`returns [${errMsgTextArea.errCharCount}] for entering less than 20 characters`, () => {
    expect(validateTextArea("Sorry")).toStrictEqual([
      errMsgTextArea.errCharCount,
    ]);
  });

  test(`returns [${errMsgTextArea.errCharCount}] for entering more than 100 characters`, () => {
    expect(
      validateTextArea(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      )
    ).toStrictEqual([errMsgTextArea.errCharCount]);
  });

  test(`returns [${errMsgTextArea.errEmpty},${errMsgTextArea.errCharCount}] for not entering any details in the textarea`, () => {
    expect(validateTextArea("")).toStrictEqual([
      errMsgTextArea.errEmpty,
      errMsgTextArea.errCharCount,
    ]);
  });

  test("returns an empty array for entering text in textarea", () => {
    expect(
      validateTextArea(
        "I behaved rudely to a citzen in Fakelandia. I will make sure I don't do it next time."
      )
    ).toStrictEqual([]);
  });
});
