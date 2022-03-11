import "./style.css";
import Datetime from "../Datetime/index.js"

const Form = ({ body }) => {

  return (
    <form className="form">
      <fieldset className="form__fieldset">
      <Datetime/>
        {body}
      </fieldset>
    </form>)

};

export default Form;