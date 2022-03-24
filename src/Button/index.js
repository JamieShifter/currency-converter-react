import { FormReverse, ReverseButton } from "./styled";
import { LabelText } from "../Container/styled";

const Button = ({ reverseCurrency }) => (
    <FormReverse>
        <LabelText reverse>Reverse:</LabelText>
        <ReverseButton type="button" value="♺" onClick={reverseCurrency} />
    </FormReverse>

);

export default Button;