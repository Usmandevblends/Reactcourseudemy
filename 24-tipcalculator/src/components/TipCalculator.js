import React from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

function TipCalculator() {
  return (
    <center>
      <BillInput />
      <SelectPercentage />
      <Output />
      <Reset />
    </center>
  );
}

export default TipCalculator;
