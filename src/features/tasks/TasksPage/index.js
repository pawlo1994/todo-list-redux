import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../../common/Section';
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { Search } from './Search';
import { theme } from '../../../common/theme.js';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchExampleTasks } from '../tasksSlice';
import { TaskCommonButton } from '../TaskCommonButton';

function TasksPage() {

  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista Zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
          extraHeaderContent={
            <TaskCommonButton
              onClick={() => dispatch(fetchExampleTasks())}
            >
              Pobierz przykładowe zadania
            </TaskCommonButton>}
        />
        <Section
          title="Wyszukiwarka"
          body={<Search />}
        />
        <Section title="Lista zadań"
          body={<TaskList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default TasksPage;
