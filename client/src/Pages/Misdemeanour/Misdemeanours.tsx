import { useEffect, useState } from "react";
import {
  Misdemeanour,
  MisdemeanourKind,
  MISDEMEANOURS,
} from "./Misdemeanours.types";
import { MisdemeanourEmoji } from "./MisdemeanourEmoji";
import { fetchData } from "../../Components/Fetch";
import Select from "../../Components/Select/Select";
import Option from "../../Components/Option/Option";
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
  const [misdemeanourValue, setMisdemeanourValue] = useState<string>(
    MISDEMEANOURS[0]
  );

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
    <div className="table__container">
      <table className="table">
        <thead className="table__header">
          <tr className="table__header-row">
            <th>Citizen Id</th>
            <th>Date</th>
            <th>
              <p> Misdemeanour </p>
              <Select
                classNameContainer="table__dropdown-container"
                className="table__dropdown"
                value={misdemeanourValue}
                options={
                  <>
                    <Option value="" label="Filter :" />
                    {MISDEMEANOURS.map((misdemeanourOpt, i) => (
                      <Option
                        key={i + misdemeanourOpt}
                        value={
                          misdemeanourOpt +
                          " " +
                          MisdemeanourEmoji(misdemeanourOpt)
                        }
                        label={
                          misdemeanourOpt +
                          " " +
                          MisdemeanourEmoji(misdemeanourOpt)
                        }
                      />
                    ))}
                  </>
                }
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setMisdemeanourValue(e.target.value);

                  if (e.target.value) {
                    const listCriminal = criminals.filter(
                      (criminal: Misdemeanour, i) => {
                        const crime =
                          criminal.misdemeanour +
                          " " +
                          MisdemeanourEmoji(criminal.misdemeanour);
                        debugger;
                        return crime === e.target.value;
                      }
                    );

                    setFilteredCriminals(listCriminal);
                  } else {
                    setFilteredCriminals(criminals);
                  }
                }}
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
  );
};

export default Misdemeanours;
