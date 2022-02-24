import "./style.css";

const Button = ({ reverseCurrency }) => (
    <div className="form__reverse">
        <label className="form__labelText form__labelText--reverse">Reverse:</label>
        <input className="form__button" type="button" value="♺" onClick={reverseCurrency} />
    </div>

);

export default Button;