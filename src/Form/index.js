import "./style.css";

const Form = (props) => (
    <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Convert</legend>
            <p>
              <label className="form__label">
                <span className="form__labelText">Convert From:</span>
                <select className="form__field" name="from">
                  <option value="pln">PLN</option>
                  <option value="eur">EUR</option>
                  <option value="usd">USD</option>
                  <option value="gbp">GBP</option>
                  <option value="czk">CZK</option>
                  <option value="rub">RUB</option>
                  <option value="jpy">JPY</option>
                  <option value="btc">BTC</option>
                </select>
              </label>
              <label className="form__label">
                <span className="form__labelText">Amount:</span>
                <input className="form__field" required type="number" name="fromAmount" step="0.01"
                  min="0.01"/>
              </label>
            </p>
            <p>
              <label className="form__labelText form__labelText--reverse">Reverse:</label>
              <input className="form__button" type="button" value="♺"/>
            </p>
            <p>
              <label className="form__label">
                <span className="form__labelText">Convert To:</span>
                <select className="form__field" name="to">
                  <option value="eur">EUR</option>
                  <option value="pln">PLN</option>
                  <option value="usd">USD</option>
                  <option value="gbp">GBP</option>
                  <option value="czk">CZK</option>
                  <option value="rub">RUB</option>
                  <option value="jpy">JPY</option>
                  <option value="btc">BTC</option>
                </select>
              </label>
              <label className="form__label">
                <span className="form__labelText">Result Amount:</span>
                <span className="form__labelText form__labelText--result"></span>
              </label>
            </p>
          </fieldset>
        </form>
);

export default Form;