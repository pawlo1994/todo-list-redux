import TasksPage from "./features/tasks/TasksPage/index";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage/index";
import { StyledNavLink } from "./styled";
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';

export const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);