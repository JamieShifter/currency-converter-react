import { Clock } from "./styled";
import { useState, useEffect } from "react";

const Datetime = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    let day = currentDate.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long", });
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
        <Clock>
            Dzisiaj jest {day}, {time}
        </Clock>
    )

};

export default Datetime;