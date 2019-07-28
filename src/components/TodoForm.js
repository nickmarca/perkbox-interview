/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import uuid from 'uuid/v1';

const commonCss = css`
    background: transparent;
    outline: 0;
    width: 100%;
    color: #4a4a4a;
    border: 0;
    appearance: none;
`;

const inputCss = css`
    ${commonCss}
    color: #363636;
    font-weight: 700;
`;

const textareaCss = css`
    ${commonCss}
    padding: 0px;
    height: 60px;
    resize: none;
`;

const btnCss = css`
    cursor: pointer;
    color: #3273dc;
    &:hover {
        color: #363636;
    }
`;

function TodoForm({ onSave }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const reset = () => {
        setTitle('');
        setDescription('');
    };

    const onSaveClick = () => {
        onSave({ title, description, id: uuid(), createdAt: Date.now() });
        reset();
    };

    return (
        <div className="card" style={{ marginBottom: 25 }}>
            <header className="card-header">
                <p className="card-header-title">
                    <input
                        placeholder="Type a title..."
                        type="text"
                        css={inputCss}
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                    />
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <textarea
                        css={textareaCss}
                        placeholder="Type a description..."
                        value={description}
                        onChange={({ target }) => setDescription(target.value)}
                    />
                </div>
            </div>
            <footer className="card-footer">
                <span
                    css={btnCss}
                    onClick={onSaveClick}
                    className="card-footer-item"
                >
                    Save
                </span>
                <span css={btnCss} onClick={reset} className="card-footer-item">
                    Clean
                </span>
            </footer>
        </div>
    );
}

export default TodoForm;
