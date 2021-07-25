import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, StyledButtonsButton } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
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
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </StyledButtonsButton>
                </StyledButtons>)}
        </>)
};

export default Buttons;