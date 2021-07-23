import { StyledButtons, StyledButtonsButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
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
    )
);

export default Buttons;