import React, { useState } from "react";
import { sanitizeFloat, dollarFormatter, validateFloat } from "./utils";

const CurrencyInput = () => {
  const [value, setValue] = useState("");

  const onChange = e => {
    const value = sanitizeFloat(e.target.value);

    if (validateFloat(value)) {
      console.log(`set value: ${value}`);
      setValue(value);
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      value={dollarFormatter(value, "$")}
      onChange={onChange}
      placeholder="$0.00"
    />
  );
};

export default CurrencyInput;
