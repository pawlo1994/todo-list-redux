import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
    padding-right: 0;
    display: grid;
    grid-template-columns: 1fr;

    @media(max-width: ${({ theme }) => theme.breakpoint}px)
    {
        padding-right: 20px;
    }
`;