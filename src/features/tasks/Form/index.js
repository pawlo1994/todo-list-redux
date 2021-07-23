import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
    const inputRef = useRef(null);
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!newTaskContent.trim()) {
            setNewTaskContent("");
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    }

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <StyledInput
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                required
            />
            <StyledButton>Dodaj zadanie</StyledButton>
        </StyledForm>
    )
};

export default Form;