import "./style.css";

const Button = () => (
    <p>
        <label className="form__labelText form__labelText--reverse">Reverse:</label>
        <input className="form__button" type="button" value="♺" />
    </p>
);

export default Button;