import Clock from "../Clock/index.js";
import {StyledForm, Fieldset} from "./styled";

const Form = ({ body }) => {

  return (
    <StyledForm>
      <Fieldset>
      <Clock/>
        {body}
      </Fieldset>
    </StyledForm>)

};

export default Form;