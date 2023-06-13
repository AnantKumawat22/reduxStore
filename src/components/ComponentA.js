import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const ComponentA = () => {
  return (
    <>
      <div className="inpField">
        <ComponentB />
        <ComponentC />
      </div>
    </>
  );
};

export default ComponentA;
