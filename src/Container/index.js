import "./style.css";

const Container = ({ currencies, title, input, amount, onAmountChange, result, inputCurrency, onInputCurrencyChange, outputCurrency, onOutputCurrencyChange }) => {

    const preventKeyPressNegative = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const preventPasteNegative = (e) => {
        const clipboardData = e.clipboardData || window.clipboardData;
        const pastedData = parseFloat(clipboardData.getData('text'));
    
        if (pastedData < 0) {
            e.preventDefault();
        }
    };
    

    return (
        <div className="form__container">
                <label className="form__label">
                    <span className="form__labelText">{title}:</span>
                    <select
                        value={input ? inputCurrency : outputCurrency}
                        onChange={input ? onInputCurrencyChange : onOutputCurrencyChange}
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
                            min="0"
                            onPaste={preventPasteNegative}
                            onKeyPress={preventKeyPressNegative}
                            value={amount}
                            onChange={onAmountChange} />
                        :
                        <span className="form__labelText form__labelText--result">{result}</span>
                    }
                </label>
        </div>
    );
};

export default Container;