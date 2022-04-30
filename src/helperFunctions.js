
export const formatResult = (inputCurrency, outputCurrency, amount, exchangeRate) => {
    let resultAmount = calculateResult(inputCurrency, outputCurrency, amount, exchangeRate);
    let resultFixed = (outputCurrency !== "btc" ? resultAmount.toFixed(2).toString() : resultAmount.toString());
    let rendered = `${resultFixed} ${outputCurrency.toUpperCase()}`
    return rendered;
  };

export const calculateResult = (inputCurrency, outputCurrency, amount, exchangeRate) => {
    if (exchangeRate.rates === undefined) {
      return 0
    }
    let resultAmount = amount * (exchangeRate.rates[outputCurrency] / exchangeRate.rates[inputCurrency]);
    return resultAmount;
  };
