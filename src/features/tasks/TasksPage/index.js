import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../../common/Section';
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { Search } from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExampleTasks, selectLoading } from '../tasksSlice';
import { TaskCommonButton } from '../TaskCommonButton';

function TasksPage() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  return (
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
  );
}

export default TasksPage;
