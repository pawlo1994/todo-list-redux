import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, StyledInput, StyledButton } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
    const inputRef = useRef(null);
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!newTaskContent.trim()) {
            setNewTaskContent("");
            return;
        }

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

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