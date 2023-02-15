// Fetch Misdemeanours
import { Misdemeanour } from "../types/misdemeanours.types";

const getErrorMessage = ({ message }: { message: string }) => {
  console.error(message);
};

export const fetchData = async (url: string, callBack: (T: any) => void) => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Something went wrong in fetching data!");

    const { misdemeanours } = await response.json();
    console.log(misdemeanours);
    callBack(misdemeanours);

    // setData(json.data);
  } catch (err: unknown) {
    let message: string = "unknown error";
    if (err instanceof Error) message = err.message;
    getErrorMessage({ message });
  }
};
