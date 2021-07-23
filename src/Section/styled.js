import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: #fff;
    margin: 30px;
    padding: 0;
    box-shadow: 0px 0px 2px 2px #ddd;
`;

export const StyledSectionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ddd;
    padding: 0 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        flex-direction: column;
    }
`;