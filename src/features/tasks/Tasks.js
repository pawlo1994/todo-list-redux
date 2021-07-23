import { useState } from 'react';
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
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
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
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
