import { useEffect, useState } from "react";
import { Misdemeanour, MISDEMEANOURS } from "../types/misdemeanours.types";

const defaultMisdemeanours: Misdemeanour = {
  citizenId: 0,
  misdemeanour: MISDEMEANOURS[0],
  date: "",
};

const Misdemeanours = () => {
  const [dataMisdemeanours, setDataMisdemeanours] =
    useState<Misdemeanour>(defaultMisdemeanours);

  const getErrorMessage = ({ message }: { message: string }) => {
    console.error(message);
  };

  useEffect(() => {
    const fetchMisdemeanours = async (number: number) => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/misdemeanours/${number}`
        );

        if (!response.ok)
          throw new Error("Something went wrong in fetching data!");

        const { misdemeanours } = await response.json();
        console.log(misdemeanours);
        setDataMisdemeanours(misdemeanours);

        // setData(json.data);
      } catch (err: unknown) {
        let message: string = "unknown error";
        if (err instanceof Error) message = err.message;
        getErrorMessage({ message });
      }
    };
    fetchMisdemeanours(50);
  }, []);

  return (
    <div className="table__container">
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            <th>Citizen Id</th>
            <th>Date</th>
            <th>Misdemeanour</th>
            <th>Punishment Idea</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {/* {dataMisdemeanours.forEach((midemeanour) => {})} */}
          <tr className="table__row">
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Misdemeanours;
