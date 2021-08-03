import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
    list-style-type: none;
    margin: 0 auto;
    padding: 40px 10px 20px;
`;

export const StyledItem = styled.li`
    padding: 10px 20px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    border-bottom: 2px solid #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const StyledSpan = styled.span`
    color: #333;
    word-break: break-word;
    padding: 0 5px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledButton = styled.button`
    display: flex;
    padding: 5px;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border: none;
    transition: background-color 0.3s;

    ${({ done }) => done && css`
        background-color: #090;
        color: #fff;

        &:hover{
            background-color: #0a0;
        }
    `}

    ${({ remove }) => remove && css`
        background-color: #f00;
        color: #fff;

        &:hover{
            background-color: #f60;
        }
    `}

    &:hover{
        cursor: pointer;
    }

    &:active{
        outline: 2px solid #000;
    }
`;