import Form from "./Form";
import Container from "./Container";
import Button from "./Button";
import Header from "./Header";
import { MainWindow, Loading } from "./styled";
import "./index.css";
import { useState } from "react";
import { useExchangeRates } from "./rates"
import loading from "./images/loading.gif"
import error from "./images/error.png"


function App() {
  const exchangeRate = useExchangeRates();

  const reverseCurrency = () => {
    setResult(renderResult(outputCurrency, inputCurrency, amount));
    let reversedFromCurrency = outputCurrency;
    setOutputCurrency(inputCurrency);
    setInputCurrency(reversedFromCurrency);
  };

  const calculate = (inputCurrency, outputCurrency, amount) => {
    let resultAmount = amount * (exchangeRate.rates[outputCurrency] / exchangeRate.rates[inputCurrency]);
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

  const [inputCurrency, setInputCurrency] = useState("PLN");
  const onInputCurrencyChange = ({ target }) => {
    setInputCurrency(target.value);
    setResult(renderResult(target.value, outputCurrency, amount));
  }

  const [outputCurrency, setOutputCurrency] = useState("EUR");
  const onOutputCurrencyChange = ({ target }) => {
    setOutputCurrency(target.value);
    setResult(renderResult(inputCurrency, target.value, amount));
  }

  return (
    <main>
      <Header version={1.5} />
      {exchangeRate.state == "loading" ?
        (<>
          <Loading> 
            <h1>Przelicznik walut</h1>
            <p>Poczekaj chwilkę, ładuję dane z Europejskigo Banku Centralnego</p>
            <p><img src={loading} alt='cirle' width='50' height='50' /></p>
          </Loading>
        </>
        )
        :
        (exchangeRate.state === "error" ?
          (
            <Loading> 
              <h1>Przelicznik walut</h1>
              <p>Coś poszło nie tak, sprawdź stan połącznia z internetem</p>
              <p><img src={error} alt='circle' width='50' height='50'/></p>
            </Loading>
          )
          :

          (
            <MainWindow>
              <Form
                body={
                  <>
                    <Container
                      currencies={exchangeRate.rates}
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
                      currencies={exchangeRate.rates}
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
          )
        )
      }

    </main>
  );
}

export default App;
