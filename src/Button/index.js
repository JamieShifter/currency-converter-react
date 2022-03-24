import "./style.css";
import { FormReverse, ReverseButton } from "./styled";

const Button = ({ reverseCurrency }) => (
    <FormReverse>
        <label className="form__labelText form__labelText--reverse">Reverse:</label>
        <ReverseButton type="button" value="♺" onClick={reverseCurrency} />
    </FormReverse>

);

export default Button;