import React, { useContext, useEffect, useState } from "react";
import { MisdemeanourContext } from "./MisdemeanourContext";
import {
  Misdemeanour,
  Misdemeanant,
  SelfConfessionMisdemeanour,
} from "./Misdemeanours.types";
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
  const [misdemeanants, setMisdemeanants] = useState<Array<Misdemeanant>>([]);
  const [filteredMisdemeanants, setFilteredMisdemeanants] = useState<
    Array<Misdemeanant>
  >([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Add the confession data to the list of misdemeanourse
  const newMisdemeanourOfMisdemeanant = useContext(HomeRouterContext);

  useEffect(() => {
    getMisdemeanours();
  }, []);

  //get Misdemeanours data fron API
  const getMisdemeanours = async () => {
    setError("");
    setIsLoading(true);

    const misdemeanourFetchData:
      | { misdemeanours: Array<Misdemeanour> }
      | undefined = await fetchData(
      `http://localhost:8080/api/misdemeanours/${MISDEMEANOUR_NUM}`,
      setError
    );

    if (misdemeanourFetchData) {
      setIsLoading(false);
      const dataArr: Array<Misdemeanant> =
        misdemeanourFetchData.misdemeanours.map((mis, i) => {
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
            selfConfession: false,
            selfConfessionDetails: "none",
          };
        });
      setMisdemeanants(dataArr);
      setFilteredMisdemeanants(dataArr);
      updateListOfMisdemeanants(newMisdemeanourOfMisdemeanant, dataArr);
    } else {
      setIsLoading(false);
    }
  };

  // updates list of misdemeanours after user adds new misdemeanour data from confession page
  const updateListOfMisdemeanants = (
    selfConfessionMisdemeanour: SelfConfessionMisdemeanour,
    misdemeanants: Array<Misdemeanant>
  ) => {
    const { misdemeanourInfo, selfConfession, selfConfessionDetails } =
      selfConfessionMisdemeanour;
    const { citizenId, misdemeanour, date } = misdemeanourInfo;

    if (citizenId && misdemeanour && date) {
      let newListOfMisdemeanants: Array<Misdemeanant> = [];

      newListOfMisdemeanants = [
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
          selfConfession: selfConfession,
          selfConfessionDetails: selfConfessionDetails,
        },
        ...misdemeanants,
      ];
      console.log(newListOfMisdemeanants);
      setMisdemeanants(newListOfMisdemeanants);
      setFilteredMisdemeanants(newListOfMisdemeanants);
    }
  };

  //check number of misdemeanours today
  const totalMisdemeanoursToday = () => {
    return (
      "Total Misdemeanours Today :" +
      " " +
      misdemeanants.filter((misdem, i) => {
        const {
          misdemeanours: { date },
        } = misdem;
        return date === new Date().toLocaleDateString("en-US");
      }).length
    );
  };

  //check number of self confessions today
  const totalSelfConfessionsToday = () => {
    return (
      "Total Self Confessions Today :" +
      " " +
      misdemeanants.filter((misdem, i) => {
        const { selfConfession } = misdem;
        return selfConfession === true;
      }).length
    );
  };

  return (
    <MisdemeanourContext.Provider value={misdemeanants}>
      <div className="misdemeanour">
        <div className="misdemeanour__sidebar">
          <div className="misdemeanour__sidebar-heading">
            <svg className="icon--small icon-stats-dots">
              <use xlinkHref="../../public/Svg/stats-dots.svg#icon-stats-dots"></use>
            </svg>
            <h3>Misdemeanours Data Table</h3>
          </div>
          <p>{totalMisdemeanoursToday()}</p>
          <p>{totalSelfConfessionsToday()}</p>
        </div>
        <div className="misdemeanour__table" aria-label="misdemeanour-page">
          <table className="table">
            <thead className="table__header">
              <tr className="table__header-row">
                <th>Citizen Id</th>
                <th>Date</th>
                <th>
                  <p> Misdemeanour </p>
                  <MisdemeanourSelect
                    setFilteredMisdemeanants={(data) => {
                      setFilteredMisdemeanants(data);
                    }}
                  />
                </th>
                <th>Punishment Idea</th>
                <th>Confession Details</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {filteredMisdemeanants.map((misdem, i) => {
                const { citizenId, date, misdemeanour } = misdem.misdemeanours;
                const { src, alt } = misdem.punishment;
                const { selfConfession, selfConfessionDetails } = misdem;
                return (
                  <tr
                    key={i + "midemeanour"}
                    className={
                      selfConfession
                        ? "table__row table__self-confession"
                        : "table__row"
                    }
                  >
                    <td>
                      <span className="table__label">Citizen Id :</span>
                      {citizenId}
                    </td>
                    <td>
                      <span className="table__label">Date :</span>
                      {date}
                    </td>
                    <td>
                      <span className="table__label">Misdemeanour :</span>
                      {misdemeanour + " " + MisdemeanourEmoji(misdemeanour)}
                    </td>
                    <td>
                      <span className="table__label">Punishment Idea :</span>
                      <img src={src} alt={alt} />
                    </td>
                    <td>
                      <span className="table__label">Confession Details :</span>
                      {selfConfessionDetails}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {isLoading && (
            <div className="table__loading" aria-label="misdemeanour-loading">
              Loading ...
            </div>
          )}
          {error && (
            <div className="table__error" aria-label="misdemeanour-error">
              {error}
            </div>
          )}
        </div>
      </div>
    </MisdemeanourContext.Provider>
  );
};

export default React.memo(Misdemeanours);
