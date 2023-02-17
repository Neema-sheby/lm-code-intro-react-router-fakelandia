import { ErrorMessagesAPI } from "../ErrorHandler/ErrorMessages";

const getErrorMessage = ({ message }: { message: string }) => {
  console.error(message);
};

export const fetchData = async (
  url: string,
  callbackError: (T: string) => void
) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 500)
        throw new Error(`${ErrorMessagesAPI.error500}`);
      else if (response.status === 418)
        throw new Error(`${ErrorMessagesAPI.error418}`);
      else if (response.status === 404)
        throw new Error(`${ErrorMessagesAPI.error404}`);
      else {
        throw new Error(`${ErrorMessagesAPI.errorFetch}`);
      }
    }

    const data = await response.json();
    return data;
  } catch (err: unknown) {
    let message: string = "unknown error";
    if (err instanceof Error) message = err.message;
    getErrorMessage({ message });
    callbackError(message);
  }
};
