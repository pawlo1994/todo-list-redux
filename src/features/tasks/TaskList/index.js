import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { StyledTasks, StyledItem, StyledSpan, StyledButton } from "./styled";

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <StyledTasks>
            {tasks.map(task => (
                <StyledItem hidden={hideDone && task.done}
                    key={task.id}
                >
                    <StyledButton done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </StyledButton>
                    <StyledSpan done={task.done}>
                        {task.content}
                    </StyledSpan>
                    <StyledButton remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </StyledButton>
                </StyledItem>
            ))}
        </StyledTasks>
    )
};

export default TaskList;