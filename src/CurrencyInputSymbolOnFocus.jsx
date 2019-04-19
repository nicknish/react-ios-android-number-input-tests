import React, { useState } from "react";
import { floatSanitizer, dollarFormatter } from "./utils";

const CurrencyInputSymbolOnFocus = ({ currencySymbol }) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    const value = floatSanitizer(e.target.value);
    console.log(value);
    setValue(value);
  };

  const onFocusSetCurrencySymbol = e => {
    if (e.target.value) {
      return;
    }
    setValue(currencySymbol);
  };

  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        value={
          value && value !== currencySymbol
            ? dollarFormatter(value, currencySymbol)
            : value
        }
        onChange={onChange}
        onFocus={onFocusSetCurrencySymbol}
        placeholder="$0.00"
      />
    </>
  );
};

export default CurrencyInputSymbolOnFocus;
