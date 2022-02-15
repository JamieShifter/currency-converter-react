import "./style.css";

const Form = ({ body }) => {

  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Convert</legend>
        {body}
      </fieldset>
    </form>)

};

export default Form;