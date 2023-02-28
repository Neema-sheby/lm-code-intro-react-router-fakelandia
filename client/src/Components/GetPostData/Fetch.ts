import { ErrorMessagesAPI } from "../ErrorHandler/ErrorMessages";

export const fetchData = async <T>(
  url: string,
  callbackError: (T: string) => void
): Promise<{ misdemeanours: Array<T> } | undefined> => {
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

    const result = await response.json();
    callbackError("");
    return result;
  } catch (err: unknown) {
    let message: string = "unknown error";
    if (err instanceof Error) message = err.message;
    callbackError(message);
  }
};
