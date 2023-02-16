import React, { useContext, useState } from "react";
import Option from "../Option/Option";
import { MisdemeanourContext } from "../../Pages/Misdemeanour/MisdemeanourContext";
import {
  Misdemeanour,
  MISDEMEANOURS,
} from "../../Pages/Misdemeanour/Misdemeanours.types";
import { MisdemeanourEmoji } from "../../Pages/Misdemeanour/MisdemeanourEmoji";

interface SelectProp {
  setFilteredCriminals: (T: Array<Misdemeanour>) => void;
}

const MisdemeanourSelect: React.FC<SelectProp> = ({ setFilteredCriminals }) => {
  const [misdemeanourValue, setMisdemeanourValue] = useState<string>(
    MISDEMEANOURS[0]
  );

  const criminals = useContext(MisdemeanourContext);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMisdemeanourValue(e.target.value);

    if (e.target.value) {
      const listCriminal = criminals.filter((criminal: Misdemeanour, i) => {
        const crime =
          criminal.misdemeanour +
          " " +
          MisdemeanourEmoji(criminal.misdemeanour);
        return crime === e.target.value;
      });

      setFilteredCriminals(listCriminal);
    } else {
      setFilteredCriminals(criminals);
    }
  };

  return (
    <div className="table__dropdown-container">
      <select
        className="table__dropdown"
        value={misdemeanourValue}
        onChange={onChange}
      >
        {
          <>
            <Option value="" label="Filter : All" />
            {MISDEMEANOURS.map((misdemeanour, i) => (
              <Option
                key={i + misdemeanour}
                value={misdemeanour + " " + MisdemeanourEmoji(misdemeanour)}
                label={misdemeanour + " " + MisdemeanourEmoji(misdemeanour)}
              />
            ))}
          </>
        }
      </select>
    </div>
  );
};

export default MisdemeanourSelect;
