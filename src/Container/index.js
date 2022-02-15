import React from 'react';

const Container = ({ currencies, title, input, calculate }) => {

    return (
        <div className="form__container">
            <p>
                <label className="form__label">
                    <span className="form__labelText">{title}:</span>
                    <select className="form__field" name="from">
                        {currencies.map(currency => (
                            <option key={currency.key} value={currency.display}>{currency.display.toUpperCase()}</option>
                        ))}
                    </select>
                </label>
                <label className="form__label">
                    <span className="form__labelText">{!input ? "Result " : ""}Amount:</span>
                    {
                        input ?
                            <input className="form__field" required type="number" name="fromAmount" step="0.01"
                                min="0.01" onInput={calculate} />
                            :
                            <span className="form__labelText form__labelText--result"></span>
                    }
                </label>
            </p>
        </div>
    );

};

export default Container;