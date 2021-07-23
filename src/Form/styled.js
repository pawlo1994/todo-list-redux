import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 0 auto;
    padding: 20px;
    display: flex;

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        flex-direction: column;
    }
`;

export const StyledInput = styled.input`
    flex-grow: 1;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #ccc;

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        margin: 0 0 10px;
    }
`;

export const StyledButton = styled.button`
    flex-shrink: 0;
    padding: 10px;
    background-color: ${({ theme }) => theme.buttonMainColor};
    color: #fff;
    border: none;
    transition: background-color 0.3s, transform 0.3s;

    &:hover{
        cursor: pointer;
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active{
        outline: 2px solid #000;
    }
`;