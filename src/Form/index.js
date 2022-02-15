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
      input={true}
    />
    <p>
      <label className="form__labelText form__labelText--reverse">Reverse:</label>
      <input className="form__button" type="button" value="♺"/>
    </p>
    <div className="form__container">
    <Container
      currencies={currencies}
      title="Convert To"
      input={false}
      />
    </div>
  </fieldset>
</form>)
    
};

export default Form;