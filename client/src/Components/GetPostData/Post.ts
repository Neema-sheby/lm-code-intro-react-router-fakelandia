import { ErrorMessagesAPI } from "../ErrorHandler/ErrorMessages";
import { ConfessionFormDataType } from "../Form/ConfessionForm/ConfessionFormDataType.types";
import { PostResponseDataType } from "./DefaultPostData";

const getErrorMessage = ({ message }: { message: string }) => {
  console.error(message);
};

export const postData = async (
  url: string,
  data: ConfessionFormDataType,
  callbackError: (U: string) => void
): Promise<PostResponseDataType | undefined> => {
  const postRequestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, postRequestOptions);

    if (!response.ok) {
      if (response.status === 500) throw new Error(ErrorMessagesAPI.error500);
      else if (response.status === 418)
        throw new Error(ErrorMessagesAPI.error418);
      else if (response.status === 404)
        throw new Error(ErrorMessagesAPI.error404);
      else {
        throw new Error(ErrorMessagesAPI.errorFetch);
      }
    }

    const data = await response.json();
    callbackError("");
    return data;
  } catch (err: unknown) {
    let message: string = "unknown error";
    if (err instanceof Error) message = err.message;
    getErrorMessage({ message });
    callbackError(message);
  }
};
