import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import CurrencyInput from "./CurrencyInput";

function App() {
  return (
    <div className="App">
      <h1>Testing iOS/Android Number Inputs</h1>
      <CurrencyInput />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
