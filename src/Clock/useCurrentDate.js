import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    let date = `${currentDate.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long", })}, ${currentDate.toLocaleTimeString()}`

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return date
}