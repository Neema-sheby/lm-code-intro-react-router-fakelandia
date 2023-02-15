import { useEffect, useState } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import { fetchData } from "../Components/Fetch";
import {
  MISDEMEANOUR_NUM,
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
} from "../Configuration/Config";

const Misdemeanours = () => {
  const [dataMisdemeanours, setDataMisdemeanours] = useState<
    Array<Misdemeanour>
  >([]);
  const [punishment, setPunishment] = useState<Array<string>>([]);
  //
  useEffect(() => {
    fetchData(
      `http://localhost:8080/api/misdemeanours/${MISDEMEANOUR_NUM}`,
      setDataMisdemeanours
    );
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
          {dataMisdemeanours.map((misdemeanour, i) => {
            return (
              <tr key={i + "midemeanour"} className="table__row">
                <td>{misdemeanour.citizenId}</td>
                <td>{misdemeanour.date}</td>
                <td>{misdemeanour.misdemeanour}</td>
                <td>
                  <img
                    src={`https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random&cb=${i}`}
                    alt="Some Random Picsum Image"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Misdemeanours;
