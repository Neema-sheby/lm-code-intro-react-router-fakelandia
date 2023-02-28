import React from "react";
import Provider from "../ContextProviders/Confession/ConfessionProvider";

interface ConfessionWrapperProp {
  children: React.ReactNode;
}

const ConfessionWrapper: React.FC<ConfessionWrapperProp> = ({ children }) => {
  return (
    <Provider>
      <div className="wrapper">{children}</div>
    </Provider>
  );
};

export default ConfessionWrapper;
