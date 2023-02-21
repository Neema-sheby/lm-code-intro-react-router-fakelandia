import React, { useContext, useState } from "react";
import Option from "../Option/Option";
import {
  Misdemeanant,
  MISDEMEANOURS,
} from "../../Pages/Misdemeanour/Misdemeanours.types";

import { MisdemeanourEmoji } from "../../Pages/Misdemeanour/MisdemeanourEmoji";
import { MisdemeanourContext } from "../../Pages/Misdemeanour/MisdemeanourContext";

interface SelectProp {
  setFilteredMisdemeanants: (T: Array<Misdemeanant>) => void;
}

const MisdemeanourSelect: React.FC<SelectProp> = ({
  setFilteredMisdemeanants,
}) => {
  const [misdemeanourValue, setMisdemeanourValue] = useState<string>(
    MISDEMEANOURS[0]
  );

  //Context data to filter misdemeanours
  const misdemeanants = useContext(MisdemeanourContext);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMisdemeanourValue(e.target.value);

    if (e.target.value) {
      const filteredMisdemeanantList = misdemeanants.filter(
        (misdemeanant: Misdemeanant, i) => {
          const { misdemeanour } = misdemeanant.misdemeanours;
          const crime = misdemeanour + " " + MisdemeanourEmoji(misdemeanour);
          return crime === e.target.value;
        }
      );

      setFilteredMisdemeanants(filteredMisdemeanantList);
    } else {
      setFilteredMisdemeanants(misdemeanants);
    }
  };

  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
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
