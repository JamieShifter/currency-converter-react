import "./style.css";
import { useEffect } from "react";

const Datetime = () => {

    const currentDate = new Date(); 

    return (
        <div className="form__datetime">
            Dzisiaj jest {currentDate.toLocaleString()}
        </div>
    )

};

export default Datetime;