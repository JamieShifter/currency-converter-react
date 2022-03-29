import { Datetime } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

    const date = useCurrentDate()
    let formattedDate = `${date.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long", })}, ${date.toLocaleTimeString()}`

    return (
        <Datetime>
            Dzisiaj jest {formattedDate}
        </Datetime>
    )

};

export default Clock;