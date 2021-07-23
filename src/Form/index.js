import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

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
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
};

export default Form;