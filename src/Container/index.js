import React, { useState } from 'react';

const Container = ({ currencies, title, input }) => {

    const calculate = (inputCurrency, outputCurrency, amount) => {
        let inputIndex = currencies.findIndex(x => x.display === inputCurrency);
        let outputIndex = currencies.findIndex(x => x.display === outputCurrency);
        let resultAmount = amount * (currencies[outputIndex].pln_ratio / currencies[inputIndex].pln_ratio);
        return(resultAmount);
    };

    

    const [result, setResult] = useState(0);

    const [amount, setAmount] = useState(0);
    const onAmountChange = ({ target }) => {
        let new_value = calculate(inputCurrency, outputCurrency, target.value);
        setAmount(target.value);
        setResult(new_value);  // NEED TO FIGURE OUT HOW TO PASS THIS TO RESULT
        console.log(result);
        console.log(new_value);
    };

    const [inputCurrency, setInputCurrency] = useState("pln");
    const onSelectInputChange = ({ target }) => setInputCurrency(target.value);

    const [outputCurrency, setOutputCurrency] = useState("eur");
    const onSelectOutputChange = ({ target }) => setOutputCurrency(target.value);
    

    return (
        <div className="form__container">
            <p>
                <label className="form__label">
                    <span className="form__labelText">{title}:</span>
                    <select
                        value={input ? inputCurrency : outputCurrency}
                        onChange={input ? onSelectInputChange : onSelectOutputChange}
                        className="form__field"
                        name="from">
                        {currencies.map(currency => (
                            <option key={currency.key} value={currency.display}>{currency.display.toUpperCase()}</option>
                        ))}
                    </select>
                </label>
                <label className="form__label">
                    <span className="form__labelText">{!input ? "Result " : ""}Amount:</span>
                    {input ?
                        <input
                            className="form__field"
                            required type="number"
                            name="fromAmount"
                            step="0.01"
                            min="0.01"
                            value={amount}
                            onChange={onAmountChange} />
                        :
                        <span className="form__labelText form__labelText--result">{result}</span> // CAN'T GET THIS TO WORK
                    }
                </label>
            </p>
        </div>
    );
};

export default Container;