import React from 'react';
import classnames from 'classnames';
import { EMPLOYED, UNEMPLOYED } from '../constants';

function Status({ status }) {
    const isEmployed = status === EMPLOYED;
    const isUnEmployed = status === UNEMPLOYED;

    return (
        <article
            className={classnames([
                'message',
                { 'is-success': isEmployed, 'is-warning': isUnEmployed },
            ])}
        >
            <div className="message-body">
                <div className="content is-small">
                    <strong>Current Status:</strong>{' '}
                    {isEmployed ? 'Employed' : null}
                    {isUnEmployed ? 'Unemployed' : null}
                </div>
            </div>
        </article>
    );
}

export default Status;
