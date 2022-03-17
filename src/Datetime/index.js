import "./style.css";
import { useState, useEffect } from "react";

const Datetime = () => {

    const [currentDate, setCurrentDate] = useState(new Date()); 
    let day = currentDate.toLocaleDateString("pl-PL", {weekday: "long", day: "numeric", month: "long", });
    let time = currentDate.toLocaleTimeString();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="form__datetime">
            Dzisiaj jest {day}, {time}
        </div>
    )

};

export default Datetime;