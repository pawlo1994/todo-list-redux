import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    list-style-type: none;
    padding: 0; 

    @media(max-width:${({ theme }) => theme.breakpoint}px){
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledButtonsButton = styled.button`
    padding-left: 20px;
    background-color: transparent;
    border: none;
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