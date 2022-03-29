import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    display:flex;
    flex-direction: row;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

export const LabelText = styled.span`
    display: inline-block;
    width: 100%;
    max-width: 75px;

    ${({ reverse }) => reverse && css`
        margin: 10px 20px 10px 10px;
    `}

    ${({ styledResult }) => styledResult && css`
        max-width: 150px;
        font-size: 1.3em;
        font-weight: bold;
        color: rgb(163, 211, 163);
    `}
`;

export const FormField = styled.select`
    border: 1px solid rgb(99, 99, 99);
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    max-width: 150px;
    vertical-align: top;

    @media (max-width: 767px) {
        max-width: none;
    };

    &:required {
        border: 1px solid rgb(141, 0, 0);
    };

    &:disabled {
        background-color: rgb(146, 146, 146);
        color: black;
    };
`;

export const FormLabel = styled.label`
    display: flex;
    align-items: center;
    min-width: 230px;
    margin: 10px 50px 10px 10px;

    @media (max-width: 767px) {
        display: flex;
        flex-basis: 60px;
    };
`;