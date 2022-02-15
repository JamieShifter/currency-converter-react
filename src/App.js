import './App.css';
import Form from "./Form";
import Container from "./Container";
import Button from "./Button";
import Header from "./Header";
import { useState } from "react";
import "./index.css";


function App() {

  const currencies = [
    { key: 1, display: "pln", pln_ratio: 1 },
    { key: 2, display: "eur", pln_ratio: 0.22 },
    { key: 3, display: "usd", pln_ratio: 0.24 },
    { key: 4, display: "gbp", pln_ratio: 0.18 },
    { key: 5, display: "czk", pln_ratio: 5.45 },
    { key: 6, display: "rub", pln_ratio: 18 },
    { key: 7, display: "jpy", pln_ratio: 27.59 },
    { key: 8, display: "btc", pln_ratio: 0.00000515 }
  ];

  const reverseCurrency = () => {
    // let reversedFromCurrency = outputCurrency.value;
    // outputCurrency.value = inputCurrency.value;
    // inputCurrency.value = reversedFromCurrency;
    // calculate(inputCurrency, outputCurrency, fromAmount, toAmount, plnSeed);
  };

  const calculate = (inputCurrency, outputCurrency, fromAmount, toAmount, seed) => {
    // resultAmount = (outputCurrency.value === "btc") ?
    //   (fromAmount.value * (seed[outputCurrency.value] / seed[inputCurrency.value]))
    //   :
    //   (fromAmount.value * (seed[outputCurrency.value] / seed[inputCurrency.value])).toFixed(2);
    // toAmount.innerText = resultAmount + " " + outputCurrency.value.toUpperCase();
  };

  return (
    <div>
      <Header version={1.2} />
      <main className="main">
        <Form
          body={
            <>
              <Container
                currencies={currencies}
                title="From Currency"
                input={true}
                calculate={calculate}
              />
              <Button />
              <Container
                currencies={currencies}
                title="Convert To"
                input={false}
              />
            </>
          } />
      </main>
    </div>
  );
}

export default App;
