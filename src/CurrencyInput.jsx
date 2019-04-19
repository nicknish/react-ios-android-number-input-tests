import React, { useState } from "react";
import { floatSanitizer, dollarFormatter } from "./utils";

const CurrencyInput = () => {
  const [value, setValue] = useState(0);

  const onChange = e => {
    const value = floatSanitizer(e.target.value);
    setValue(value);
  };

  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        value={dollarFormatter(value)}
        onChange={onChange}
        placeholder="$0.00"
      />
    </>
  );
};

export default CurrencyInput;
