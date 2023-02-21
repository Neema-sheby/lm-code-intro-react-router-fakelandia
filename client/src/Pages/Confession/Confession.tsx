import React from "react";
import ConfessionForm from "../../Components/Form/ConfessionForm/ConfessionForm";
import { ConfessionProp } from "../../Components/Form/ConfessionForm/ConfessionFormDataType.types";
const Confession: React.FC<ConfessionProp> = ({
  setNewMisdemeanourOfMisdemeanant,
}) => {
  return (
    <div aria-label="confession-page" className="confession">
      <div className="confession__text">
        <svg className="icon__opacity--medium icon-file-text2">
          <use xlinkHref="../../public/Svg/file-text2.svg#icon-file-text2"></use>
        </svg>
        <p>
          It's very difficult to catch people committing misdemeanours so we
          appreciate it when citizens confess to us directly.
        </p>
        <p>
          However, if you're just having a hard day and need to vent then,
          you're welcome to contact us here too. Up to you !
        </p>
      </div>

      <ConfessionForm
        setNewMisdemeanourOfMisdemeanant={setNewMisdemeanourOfMisdemeanant}
      />
    </div>
  );
};

export default Confession;
