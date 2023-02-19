export type ErrorMsg = string;

export interface ErrorLogs {
  subject: Array<ErrorMsg>;
  reason: Array<ErrorMsg>;
  details: Array<ErrorMsg>;
}

interface ErrMsgSubject {
  errEmpty: ErrorMsg;
  errCharCount: ErrorMsg;
  errValidString: ErrorMsg;
}

interface ErrMsgReason {
  errNotSelected: ErrorMsg;
}

interface ErrMsgTextArea {
  errEmpty: ErrorMsg;
  errValidNumber: ErrorMsg;
  errDigitCount: ErrorMsg;
}

// Error messages for subject input field
export const errMsgSubject: ErrMsgSubject = {
  errEmpty: "⛔️ Error : Field is empty !",
  errCharCount:
    "⛔️ Error : Number of characters must be between 10 and 30 characters !",
  errValidString: "⛔️ Error : Please enter a valid string !",
};

// Error messages for select input field
export const errMsgReason: ErrMsgReason = {
  errNotSelected: "⛔️ Error : Please select an option !",
};

// Error messages for textarea input field
export const errMsgTextArea: ErrMsgTextArea = {
  errEmpty: "⛔️ Error : Field is empty ! Please enter a citizen id!",
  errValidNumber: "⛔️ Error : Please enter a valid number for citizen id!",
  errDigitCount:
    "⛔️ Error : Number of digits of citizen id must be greater than or equal to 2 !",
};

// Error messages based on response from API
export const ErrorMessagesAPI = {
  error404: "Error: 404 url not found! 🤕",
  error500: "Error: 500 🤕",
  error418: "Error: 418 😁",
  errorFetch: "Error: Oops... something went wrong in fetching data 🤕",
};
