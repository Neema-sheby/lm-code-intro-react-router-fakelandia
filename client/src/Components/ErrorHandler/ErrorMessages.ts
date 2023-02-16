export type ErrorMsg = string;

export interface ErrorLogs {
  subject: Array<ErrorMsg>;
  reason: Array<ErrorMsg>;
  text: Array<ErrorMsg>;
}

interface ErrMsgSubject {
  errEmpty: ErrorMsg;
  errCharCount: ErrorMsg;
  errValidString: ErrorMsg;
}

interface ErrMsgReason {
  errNotSelected: ErrorMsg;
}

interface ErrMsgText {
  errEmpty: ErrorMsg;
  errCharCount: ErrorMsg;
}

// Error messages for subject input field
export const errMsgSubject: ErrMsgSubject = {
  errEmpty: "⛔️ Error : Field is empty ! ",
  errCharCount:
    "⛔️ Error : Number of Characters must be between 10 and 50 characters !",
  errValidString: "⛔️ Error : Please enter a valid string !",
};

// Error messages for select input field
export const errMsgReason: ErrMsgReason = {
  errNotSelected: "⛔️ Error : Please select an option !",
};

// Error messages for textarea input field
export const errMsgText: ErrMsgText = {
  errEmpty: "⛔️ Error : Field is empty !",
  errCharCount:
    "⛔️ Error : Number of Characters must be between 100 and 200 !",
};
