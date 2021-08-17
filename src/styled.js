import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: white;
    text-decoration: none;
    padding: 5px 20px;

&:hover{
    border-width: 2px 0;
    border-style: solid;
    border-color: #fff;
};

&.${activeClassName}{
    font-weight: bold;
};

`;

export const StyledNavigation = styled.nav`
    display: flex;
    list-style: none;
    background-color: teal;
    padding: 20px;
    align-items: center;
    justify-content: center;
`;