import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { StyledTasks, StyledItem, StyledSpan, StyledButton } from "./styled";

const TaskList = ({ removeTask, toggleTaskDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    return (
        <StyledTasks>
            {tasks.map(task => (
                <StyledItem hidden={hideDone && task.done}
                    key={task.id}
                >
                    <StyledButton done
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔" : ""}
                    </StyledButton>
                    <StyledSpan done={task.done}>
                        {task.content}
                    </StyledSpan>
                    <StyledButton remove
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </StyledButton>
                </StyledItem>
            ))}
        </StyledTasks>
    )
};

export default TaskList;