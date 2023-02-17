const getErrorMessage = ({ message }: { message: string }) => {
  console.error(message);
};

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Something went wrong in fetching data!");

    const data = await response.json();
    return data;
  } catch (err: unknown) {
    let message: string = "unknown error";
    if (err instanceof Error) message = err.message;
    getErrorMessage({ message });
  }
};
