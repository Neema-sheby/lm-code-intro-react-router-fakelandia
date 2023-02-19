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
  test(`returns [${errMsgTextArea.errDigitCount}] for number of digits less than two`, () => {
    expect(validateTextArea("1")).toStrictEqual([errMsgTextArea.errDigitCount]);
  });

  test(`returns [${errMsgTextArea.errValidNumber}] for entering alphabets`, () => {
    expect(validateTextArea("sorry")).toStrictEqual([
      errMsgTextArea.errValidNumber,
    ]);
  });

  test(`returns [${errMsgTextArea.errValidNumber}] for entering special characters`, () => {
    expect(validateTextArea("1234/")).toStrictEqual([
      errMsgTextArea.errValidNumber,
    ]);
  });

  test(`returns [${errMsgTextArea.errEmpty},${errMsgTextArea.errValidNumber}] for not entering any number`, () => {
    expect(validateTextArea("")).toStrictEqual([
      errMsgTextArea.errEmpty,
      errMsgTextArea.errValidNumber,
    ]);
  });

  test("returns an empty array for number of digits greater than or equal to two", () => {
    expect(validateTextArea("123456")).toStrictEqual([]);
  });
});
