import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from "../../common/Header";
import Container from "../../common/Container";
import { theme } from '../../common/theme.js';
import { ThemeProvider } from 'styled-components';

function Tasks() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista Zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section title="Lista zadań"
          body={<TaskList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
