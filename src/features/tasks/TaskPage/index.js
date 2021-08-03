import Section from '../../../common/Section';
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { theme } from '../../../common/theme.js';
import { ThemeProvider } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';
import { StyledParagraph } from '../../../common/StyledParagraph';

function TaskPage() {

    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header title="Szczegóły zadania" />
                <Section
                    title={task ? task.content : "Nie znaleziono zadania"}
                    body={
                        <StyledParagraph>
                            <strong>Ukończono:</strong> {task.done ? "Tak 😁" : "Nie 😪"}
                        </StyledParagraph>
                    }
                />
            </Container>
        </ThemeProvider>
    );
}

export default TaskPage;
