import styled from "styled-components";

export const StyledContainer = styled.div`
    display:flex;
    flex-direction: row;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;