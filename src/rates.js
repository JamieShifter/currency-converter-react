import { useEffect, useState } from "react";

export const useExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState({
        state: "loading"
    })

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await fetch('https://api.exchangerate.host/latest?base=PLN');

                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { rates, date } = await response.json();
                setExchangeRates({
                    state: "success",
                    rates,
                    date
                })
            }
            catch (error) {
                setExchangeRates({ state: "error" })
                console.error("Something bad has happened", error)
            }
        };
        setTimeout(getRates, 1000);
    }, []);
    return exchangeRates;
};




