import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, StyledButtonsButton } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <>
            {tasks.length > 0 && (
                <StyledButtons>
                    <StyledButtonsButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButtonsButton>
                    <StyledButtonsButton
                        disabled={tasks.every(({ done }) => done)}
                        onClick={setAllDone}
                    >
                        Ukończ wszystkie
                    </StyledButtonsButton>
                </StyledButtons>)}
        </>)
};

export default Buttons;