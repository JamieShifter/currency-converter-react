import "./style.css";

const Button = ({reverseCurrency}) => (
    <p>
        <label className="form__labelText form__labelText--reverse">Reverse:</label>
        <input className="form__button" type="button" value="♺" onClick={reverseCurrency}/>
    </p>
);

export default Button;