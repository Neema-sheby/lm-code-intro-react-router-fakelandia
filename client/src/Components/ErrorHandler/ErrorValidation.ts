import { MisdemeanourKind } from "../../Pages/Misdemeanour/Misdemeanours.types";
import { errMsgSubject, errMsgReason, errMsgText } from "./ErrorMessages";

import {
  MIN_SUB_CHAR,
  MAX_SUB_CHAR,
  MIN_TXTAREA_CHAR,
  MAX_TXTAREA_CHAR,
} from "../../Configuration/Config";

// check character count
const checkNumCharacters = (
  minLength: number,
  maxLength: number,
  str: string
): boolean => {
  const strLen = str.length;
  if (strLen >= minLength && strLen <= maxLength) {
    return true;
  } else {
    return false;
  }
};

// validate input entered in subject
export const validateSubject = (data: string): Array<string> => {
  let error = [];
  let isString: boolean = false;
  if (!data) {
    error.push(errMsgSubject.errEmpty);
  }

  if (data.match(/[^$A-Za-z-.,\s?!]/g)) {
    error.push(errMsgSubject.errValidString);
  } else {
    isString = true;
  }

  if (isString && !checkNumCharacters(MIN_SUB_CHAR, MAX_SUB_CHAR, data)) {
    error.push(errMsgSubject.errCharCount);
  }
  return error;
};

// validate selection
export const validateReasonSelection = (
  data: string | MisdemeanourKind | "I just want to talk"
): Array<string> => {
  let error = [];

  if (!data) {
    error.push(errMsgReason.errNotSelected);
  }
  return error;
};

/// validate details entered in text area
export const validateText = (data: string): Array<string> => {
  let error = [];

  if (!data) {
    error.push(errMsgText.errEmpty);
  }

  if (!checkNumCharacters(MIN_TXTAREA_CHAR, MAX_TXTAREA_CHAR, data)) {
    error.push(errMsgText.errCharCount);
  }
  return error;
};
