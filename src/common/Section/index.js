import { StyledSection, StyledSectionHeader } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const Section = ({ title, body, extraHeaderContent }) => (
    <ThemeProvider theme={theme}>
        <StyledSection>
            <StyledSectionHeader>
                <h2>{title}</h2>
                {extraHeaderContent}
            </StyledSectionHeader>
            {body}
        </StyledSection>
    </ThemeProvider>
);

export default Section;