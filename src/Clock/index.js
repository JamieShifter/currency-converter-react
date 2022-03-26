import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

    const date = useCurrentDate()

    return (
        <StyledClock>
            Dzisiaj jest {date}
        </StyledClock>
    )

};

export default Clock;