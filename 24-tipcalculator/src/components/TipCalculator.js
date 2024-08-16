import React, { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

function TipCalculator() {
  const [bill, setBill] = useState("");

  return (
    <div className="main">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage> How did you like the Service? </SelectPercentage>
      <SelectPercentage>
        {" "}
        How did your friend like the service?{" "}
      </SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

export default TipCalculator;
