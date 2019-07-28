/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import moment from 'moment';

const btnCss = css`
    cursor: pointer;
    color: #3273dc;
    &:hover {
        color: #363636;
    }
`;

function Todo({ createdAt, title, description, onDelete, id }) {
    return (
        <div className="card" style={{ marginBottom: 25 }}>
            <header className="card-header">
                <p className="card-header-title">{title}</p>
                <span
                    css={btnCss}
                    className="card-header-icon"
                    aria-label="more options"
                >
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                </span>
            </header>
            <div className="card-content">
                <div className="content">
                    {description}
                    <br />
                    <br />
                    <p className="has-text-grey-light is-size-7">
                        created at{' '}
                        <time dateTime={createdAt}>
                            {moment(createdAt).fromNow()}
                        </time>
                    </p>
                </div>
            </div>
            <footer className="card-footer">
                <span className="card-footer-item" css={btnCss} onClick={() => onDelete(id)}>
                    Delete
                </span>
            </footer>
        </div>
    );
}

export default Todo;
