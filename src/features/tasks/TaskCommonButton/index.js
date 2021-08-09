import styled, { css } from "styled-components";

export const TaskCommonButton = styled.button`
    padding-left: 20px;
    background-color: transparent;
    border: none;
    text-decoration: none;
    color: ${({ theme }) => theme.buttonMainColor};
    transition: color 0.3s;

    @media(max-width:${({ theme }) => theme.breakpoint}px){
        padding-left: 0;
        padding-bottom: 15px;
    }

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    &:hover{
        color: hsl(180, 100%, 35%);
        cursor: pointer;
    }

    &:active{
        color: hsl(180, 100%, 20%);
    }

    &:disabled{
        color: #999;
        cursor: default;
    }
`;

export const TaskInfoLink = styled(TaskCommonButton)`
    padding: 0;
    text-decoration: none;
`;