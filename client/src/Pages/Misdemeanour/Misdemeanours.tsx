import React, { useContext, useEffect, useState } from "react";
import { MisdemeanourContext } from "./MisdemeanourContext";
import { Misdemeanour, Criminal } from "./Misdemeanours.types";
import { MisdemeanourEmoji } from "./MisdemeanourEmoji";
import { fetchData } from "../../Components/GetPostData/Fetch";
import MisdemeanourSelect from "../../Components/Select/MisdemeanourSelect";
import { HomeRouterContext } from "../../Router/HomeRouterContext";

import {
  MISDEMEANOUR_NUM,
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
} from "../../Configuration/Config";

const Misdemeanours: React.FC = () => {
  const [criminals, setCriminals] = useState<Array<Criminal>>([]);
  const [filteredCriminals, setFilteredCriminals] = useState<Array<Criminal>>(
    []
  );
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Add the confession data to the list of misdemeanourse
  const newMisdemeanourData = useContext(HomeRouterContext);

  const getCrimeData = async () => {
    setError("");
    setIsLoading(true);
    const crimeData: { misdemeanours: Array<Misdemeanour> } | undefined =
      await fetchData(
        `http://localhost:8080/api/misdemeanours/${MISDEMEANOUR_NUM}`,
        setError
      );

    if (crimeData) {
      setIsLoading(false);
      const dataArr: Array<Criminal> = crimeData.misdemeanours.map((mis, i) => {
        return {
          misdemeanours: {
            citizenId: mis.citizenId,
            date: mis.date,
            misdemeanour: mis.misdemeanour,
          },
          punishment: {
            src: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random&cb=${i}`,
            alt: `Some Random image from Lorem Picsum of width:${IMAGE_WIDTH} and height:${IMAGE_HEIGHT}`,
          },
        };
      });
      setCriminals(dataArr);
      setFilteredCriminals(dataArr);

      const { citizenId, misdemeanour, date } = newMisdemeanourData;

      if (citizenId && misdemeanour && date) {
        console.log(newMisdemeanourData);
        const newListOfCriminals = [
          {
            misdemeanours: {
              citizenId: citizenId,
              misdemeanour: misdemeanour,
              date: date,
            },
            punishment: {
              src: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`,
              alt: `Some Random image from Lorem Picsum of width:${IMAGE_WIDTH} and height:${IMAGE_HEIGHT}`,
            },
          },
          ...dataArr,
        ];

        //setCriminals(newListOfCriminals);
        setFilteredCriminals(newListOfCriminals);
      }
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCrimeData();
  }, []);

  return (
    <MisdemeanourContext.Provider value={criminals}>
      <div className="table__container" aria-label="misdemeanour-page">
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
              const { citizenId, date, misdemeanour } = criminal.misdemeanours;
              const { src, alt } = criminal.punishment;
              return (
                <tr key={i + "midemeanour"} className="table__row">
                  <td>{citizenId}</td>
                  <td>{date}</td>
                  <td>
                    {misdemeanour + " " + MisdemeanourEmoji(misdemeanour)}
                  </td>
                  <td>
                    <img src={src} alt={alt} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {isLoading && (
          <div className="table_loading" aria-label="misdemeanour-loading">
            Loading ...
          </div>
        )}
        {error && (
          <div className="table_error" aria-label="misdemeanour-error">
            {error}
          </div>
        )}
      </div>
    </MisdemeanourContext.Provider>
  );
};

export default Misdemeanours;
