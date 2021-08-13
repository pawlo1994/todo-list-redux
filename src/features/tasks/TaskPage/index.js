import Section from '../../../common/Section';
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTaskById } from '../tasksSlice';
import { StyledParagraph } from '../../../common/StyledParagraph';

function TaskPage() {

    const { id } = useParams();
    const task = useSelector(state => selectTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={
                    task ?
                        <StyledParagraph>
                            <strong>Ukończono:</strong> {task.done ? "Tak 😁" : "Nie 😪"}
                        </StyledParagraph> :
                        <StyledParagraph>
                            🤔
                        </StyledParagraph>
                }
            />
        </Container>
    );
}

export default TaskPage;
