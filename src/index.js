import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import CurrencyInput from "./CurrencyInput";
import CurrencyInputSymbolOnFocus from "./CurrencyInputSymbolOnFocus";

function App() {
  return (
    <div className="App">
      <h1>Testing iOS/Android Number Inputs</h1>

      <div className="mb4">
        <div className="f6 mb2 b">Basic Currency Inout</div>
        <CurrencyInput />
      </div>

      <div className="mb4">
        <div className="f6 mb2 b">Add $ when user focuses on field</div>
        <CurrencyInputSymbolOnFocus currencySymbol="$" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
