import "./style.css";
import Datetime from "../Datetime/index.js";
import {StyledForm, Fieldset} from "./styled";

const Form = ({ body }) => {

  return (
    <StyledForm>
      <Fieldset>
      <Datetime/>
        {body}
      </Fieldset>
    </StyledForm>)

};

export default Form;