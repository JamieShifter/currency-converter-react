import "./style.css";
import Container from "../Container";

const Form = (props) => {
  const currencies = ["pln", "eur", "usd", "gbp", "czk", "rub", "jpy", "btc"];

  return(
  <form className="form">
  <fieldset className="form__fieldset">
    <legend className="form__legend">Convert</legend>
    <Container
      currencies={currencies}
      title="From Currency"
    />
    <p>
      <label className="form__labelText form__labelText--reverse">Reverse:</label>
      <input className="form__button" type="button" value="♺"/>
    </p>
    <div className="form__container">
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
    </div>
  </fieldset>
</form>)
    
};

export default Form;