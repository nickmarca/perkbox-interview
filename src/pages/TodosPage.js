/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import Hero from '../components/Hero';
import { useStateValue } from '../hooks/useStateValue';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

const mainCss = css`
    padding: 1.5rem;
`;

function TodosPage() {
    const [{ todos }, dispatch] = useStateValue();

    const onSave = value => {
        dispatch({ type: 'newTodo', payload: value });
    };

    const onDelete = id => {
        dispatch({ type: 'deleteTodo', payload: id });
    };

    return (
        <div>
            <Hero title="Todos" subTitle="Find all your todos in one place" />
            <div className="container">
                <div css={mainCss}>
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <TodoForm onSave={onSave} />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            {todos.map(({ id, ...todoProps }) => (
                                <Todo
                                    id={id}
                                    key={id}
                                    {...todoProps}
                                    onDelete={onDelete}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodosPage;
