import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    list-style-type: none;
    padding: 0; 

    @media(max-width:${({ theme }) => theme.breakpoint}px){
        flex-direction: column;
        align-items: center;
    }
`;