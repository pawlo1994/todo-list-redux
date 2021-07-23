import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from '../../useTasks';
import { theme } from '../../common/theme.js';
import { ThemeProvider } from 'styled-components';

function Tasks() {

  const {
    // tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista Zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form
            addNewTask={addNewTask}
          />}
        />
        <Section title="Lista zadań"
          body={
            <TaskList
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
