import styled from "styled-components";

export const StyledInput = styled.input`
    flex-grow: 1;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #ccc;

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        margin: 0 0 10px;
    }
`;