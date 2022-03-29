import Form from "./Form";
import Container from "./Container";
import Button from "./Button";
import Header from "./Header";
import { MainWindow } from "./styled";
import "./index.css";
import { useState } from "react";


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
    setResult(renderResult(outputCurrency, inputCurrency, amount));
    let reversedFromCurrency = outputCurrency;
    setOutputCurrency(inputCurrency);
    setInputCurrency(reversedFromCurrency);
  };

  const calculate = (inputCurrency, outputCurrency, amount) => {
    let inputIndex = currencies.findIndex(x => x.display === inputCurrency);
    let outputIndex = currencies.findIndex(x => x.display === outputCurrency);
    let resultAmount = amount * (currencies[outputIndex].pln_ratio / currencies[inputIndex].pln_ratio);
    return resultAmount;
  };

  const renderResult = (inputCurrency, outputCurrency, amount) => {
    let resultAmount = calculate(inputCurrency, outputCurrency, amount);
    let resultFixed = (outputCurrency !== "btc" ? resultAmount.toFixed(2).toString() : resultAmount.toString());
    let rendered = resultFixed + " " + outputCurrency.toUpperCase();
    return rendered;

  };

  const onResultChange = () => { };

  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState("");
  const onAmountChange = ({ target }) => {
    setAmount(target.value);
    setResult(renderResult(inputCurrency, outputCurrency, target.value));
  };

  const [inputCurrency, setInputCurrency] = useState("pln");
  const onInputCurrencyChange = ({ target }) => {
    setInputCurrency(target.value);
    setResult(renderResult(target.value, outputCurrency, amount));
  }

  const [outputCurrency, setOutputCurrency] = useState("eur");
  const onOutputCurrencyChange = ({ target }) => {
    setOutputCurrency(target.value);
    setResult(renderResult(inputCurrency, target.value, amount));
  }

  return (
    <div>
      <Header version={1.4} />
      <MainWindow>
        <Form
          body={
            <>
              <Container
                currencies={currencies}
                title="From Currency"
                input={true}
                amount={amount}
                onAmountChange={onAmountChange}
                result={result}
                onResultChange={onResultChange}
                inputCurrency={inputCurrency}
                onInputCurrencyChange={onInputCurrencyChange}
                outputCurrency={outputCurrency}
                onOutputCurrencyChange={onOutputCurrencyChange}
              />
              <Button
                reverseCurrency={reverseCurrency}
              />
              <Container
                currencies={currencies}
                title="Convert To"
                input={false}
                amount={amount}
                onAmountChange={onAmountChange}
                result={result}
                inputCurrency={inputCurrency}
                onInputCurrencyChange={onInputCurrencyChange}
                outputCurrency={outputCurrency}
                onOutputCurrencyChange={onOutputCurrencyChange}
              />
            </>
          } />
      </MainWindow>
    </div>
  );
}

export default App;
