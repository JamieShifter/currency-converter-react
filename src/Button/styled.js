import styled from "styled-components";

export const FormReverse = styled.div`
    display:flex;
`;

export const ReverseButton = styled.input`
    border: 1px solid rgb(99, 99, 99);
    background-color: hsl(0, 0%, 80%);
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    max-width: 60px;
    vertical-align: top;
    text-align: center;
    font-size: 1.5em;
    transition: 1s;

    &:hover {
        transform: scale(1.1);
        background-color: rgb(226, 222, 215);
    };

    &:active {
        background-color: white;
    }
`;