import React, { useState } from "react";
import ConfessionForm from "../../Components/Form/ConfessionForm";
import { ConfessionProp } from "./Confession.types";

const Confession: React.FC<ConfessionProp> = ({ setPostData }) => {
  return (
    <div aria-label="confession-page" className="confession">
      <p>
        It's very difficult to catch people committing misdemeanours so we
        appreciate it when citizens confess to us directly.
      </p>
      <p>
        However, if you're just having a hard day and need to vent then, you're
        welcome to contact us here too. Up to you !
      </p>
      <ConfessionForm setPostData={setPostData} />
    </div>
  );
};

export default Confession;
