import { Datetime } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

    const date = useCurrentDate()

    return (
        <Datetime>
            Dzisiaj jest {date}
        </Datetime>
    )

};

export default Clock;