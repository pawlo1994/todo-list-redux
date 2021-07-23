import { StyledButtons, StyledButtonsButton } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <ThemeProvider theme={theme}>
            <StyledButtons>
                <StyledButtonsButton
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButtonsButton>
                <StyledButtonsButton
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </StyledButtonsButton>
            </StyledButtons>
        </ThemeProvider>
    )
);

export default Buttons;