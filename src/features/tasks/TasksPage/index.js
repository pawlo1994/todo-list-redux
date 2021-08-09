import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../../common/Section';
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { Search } from './Search';
import { theme } from '../../../common/theme.js';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExampleTasks, selectLoading, toggleLoading } from '../tasksSlice';
import { TaskCommonButton } from '../TaskCommonButton';

function TasksPage() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista Zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
          extraHeaderContent={
            <TaskCommonButton
              disabled={loading}
              onClick={
                () => {
                  dispatch(toggleLoading());
                  dispatch(fetchExampleTasks());
                }
              }
            >
              {!loading ? "Pobierz przykładowe zadania" : "Ładowanie..."}
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
