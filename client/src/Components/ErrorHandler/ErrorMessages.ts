export type Error = string;

// Error messages for subject input field
export const errMsgSubject = {
  errEmpty: "⛔️ Error : Field is empty ! ",
  errCharCount:
    "⛔️ Error : Number of Characters must be between 10 and 50 characters !",
  errValidString: "⛔️ Error : Please enter a valid string !",
};

// Error messages for select input field
export const errMsgReason = {
  errNotSelected: "⛔️ Error : Please select an option !",
};

// Error messages for textarea input field
export const errMsgDetailsTxtArea = {
  errEmpty: "⛔️ Error : Field is empty !",
  errCharCount:
    "⛔️ Error : Number of Characters must be between 100 and 200 !",
};
