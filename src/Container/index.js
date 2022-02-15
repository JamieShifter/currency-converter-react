import React, { Component } from 'react';
import Select from 'react-select';

const Container = ({ currencies, title }) => {

    const options = currencies.map(currency => (
        { value: currency, label: currency.toUpperCase() }
    ))

    return (
        <div className="form__container">
            <p>
                <label className="form__label">
                    <span className="form__labelText">{title}:</span>
                    <select className="form__field" name="from">
                        {options.map(option => (
                            <option value={option.value} label={option.label}>{option.label}</option>
                        ))}
                    </select>
                </label>
                <label className="form__label">
                    <span className="form__labelText">Amount:</span>
                    <input className="form__field" required type="number" name="fromAmount" step="0.01"
                        min="0.01" />
                </label>
            </p>
        </div>
    );

};

export default Container;