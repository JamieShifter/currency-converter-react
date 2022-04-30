import Form from "./Form";
import Container from "./Container";
import Button from "./Button";
import Header from "./Header";
import { MainWindow, Loading } from "./styled";
import "./index.css";
import { useState, useEffect } from "react";
import { useExchangeRates } from "./rates"
import loading from "./images/loading.gif"
import error from "./images/error.png"
import { formatResult } from "./helperFunctions";


function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState("");
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("EUR");

  const exchangeRate = useExchangeRates();

  const reverseCurrency = () => {
    setResult(formatResult(outputCurrency, inputCurrency, amount));
    let reversedFromCurrency = outputCurrency;
    setOutputCurrency(inputCurrency);
    setInputCurrency(reversedFromCurrency);
  };

  const onAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  const onInputCurrencyChange = ({ target }) => {
    setInputCurrency(target.value);
  }

  const onOutputCurrencyChange = ({ target }) => {
    setOutputCurrency(target.value);
  }

  useEffect(() => {
    setResult(formatResult(inputCurrency, outputCurrency, amount, exchangeRate))
  }, [amount, inputCurrency, outputCurrency, exchangeRate])

  return (
    <main>
      <Header version={1.5} />
      {exchangeRate.state === "loading" ?
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
              <p><img src={error} alt='circle' width='50' height='50' /></p>
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
                    <p>Wyliczono na podstawie kursów z dnia {exchangeRate.date}</p>
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
