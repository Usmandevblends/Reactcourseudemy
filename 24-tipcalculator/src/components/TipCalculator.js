import React from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

function TipCalculator() {
  return (
    <div className="main">
      <BillInput />
      <SelectPercentage> How did you like the Service? </ SelectPercentage>
      <SelectPercentage> How did your friend like the service? </ SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

export default TipCalculator;
