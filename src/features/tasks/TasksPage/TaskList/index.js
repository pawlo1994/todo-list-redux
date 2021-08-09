import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { StyledTasks, StyledItem, StyledSpan, StyledButton } from "./styled";
import { Link, useLocation } from "react-router-dom";
import { TaskInfoLink } from "../../TaskCommonButton";

const TaskList = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
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
                        <TaskInfoLink as={Link} to={`/zadania/${task.id}`}>{task.content}</TaskInfoLink>
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