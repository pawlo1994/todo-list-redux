import { useSelector, useDispatch } from "react-redux";
import { StyledButtons } from "./styled";
import { selectTasks, selectHideDone, toggleHideDone, setAllDone } from "../../tasksSlice";
import { TaskCommonButton } from "../../TaskCommonButton";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <>
            {tasks.length > 0 && (
                <StyledButtons>
                    <TaskCommonButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </TaskCommonButton>
                    <TaskCommonButton
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </TaskCommonButton>
                </StyledButtons>)}
        </>)
};

export default Buttons;