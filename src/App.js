import React from 'react';
import TopNavbar from './components/TopNavbar';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import { StateProvider } from './hooks/useStateValue';
import TodosPage from './pages/TodosPage';
import JobsPage from './pages/JobsPage';
import EditJobsPage from './pages/EditJobsPage';

const initialState = {
    jobs: [],
    todos: [],
    currentStatus: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'newTodo':
            const { todos: t1 } = state;
            return {
                ...state,
                todos: [action.payload, ...t1],
            };
        case 'deleteTodo':
            const { todos: t2 } = state;
            const t = t2.filter(t => t.id !== action.payload);
            return { ...state, todos: t };

        case 'updateJobs':
            const {
                payload: { jobs, currentStatus },
            } = action;
            return { ...state, jobs, currentStatus };
        default:
            return state;
    }
};

function App() {
    return (
        <Router>
            <StateProvider initialState={initialState} reducer={reducer}>
                <TopNavbar />

                <Switch>
                    <Route path="/todos" component={TodosPage} />
                    <Route path="/jobs" component={JobsPage} />
                    <Route path="/edit/jobs" component={EditJobsPage} />
                    <Redirect exact from="/" to="/jobs" />
                </Switch>
            </StateProvider>
        </Router>
    );
}

export default App;
