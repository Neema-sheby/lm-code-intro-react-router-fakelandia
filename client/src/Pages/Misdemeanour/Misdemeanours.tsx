import { useEffect, useState } from "react";
import { MisdemeanourContext } from "./MisdemeanourContext";
import { Misdemeanour } from "./Misdemeanours.types";
import { MisdemeanourEmoji } from "./MisdemeanourEmoji";
import { fetchData } from "../../Components/Fetch";
import MisdemeanourSelect from "../../Components/Select/MisdemeanourSelect";

import {
  MISDEMEANOUR_NUM,
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
} from "../../Configuration/Config";

const Misdemeanours = () => {
  const [criminals, setCriminals] = useState<Array<Misdemeanour>>([]);
  const [filteredCriminals, setFilteredCriminals] = useState<
    Array<Misdemeanour>
  >([]);

  const getCrimeData = async () => {
    const crimeData = await fetchData(
      `http://localhost:8080/api/misdemeanours/${MISDEMEANOUR_NUM}`
    );
    setCriminals(crimeData);
    setFilteredCriminals(crimeData);
  };

  useEffect(() => {
    getCrimeData();
  }, []);

  return (
    <MisdemeanourContext.Provider value={criminals}>
      <div className="table__container">
        <table className="table">
          <thead className="table__header">
            <tr className="table__header-row">
              <th>Citizen Id</th>
              <th>Date</th>
              <th>
                <p> Misdemeanour </p>

                <MisdemeanourSelect
                  setFilteredCriminals={(data) => setFilteredCriminals(data)}
                />
              </th>
              <th>Punishment Idea</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {filteredCriminals.map((criminal, i) => {
              return (
                <tr key={i + "midemeanour"} className="table__row">
                  <td>{criminal.citizenId}</td>
                  <td>{criminal.date}</td>
                  <td>
                    {criminal.misdemeanour +
                      " " +
                      MisdemeanourEmoji(criminal.misdemeanour)}
                  </td>
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
    </MisdemeanourContext.Provider>
  );
};

export default Misdemeanours;
