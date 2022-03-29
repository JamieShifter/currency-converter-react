import Clock from "../Clock/index.js";
import {MainForm, Fieldset} from "./styled";

const Form = ({ body }) => {

  return (
    <MainForm>
      <Fieldset>
      <Clock/>
        {body}
      </Fieldset>
    </MainForm>)

};

export default Form;