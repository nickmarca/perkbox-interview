import React from 'react';
import classnames from 'classnames';

function JobsQuantityForm({ jobsQuantity, dispatch, createJob }) {
    const onClick = jobs => {
        dispatch({
            type: 'jobsQuantityChange',
            payload: jobs,
        });
    };

    return (
        <div className="box">
            <p
                style={{ marginBottom: 30 }}
                className="is-size-7 has-text-grey-light"
            >
                Jobs Quantity
            </p>

            <p style={{ marginBottom: 10 }}>
                <strong>How many jobs do you have ?</strong>
            </p>
            <div className="field is-grouped is-grouped-multiline">
                <p className="control">
                    <span
                        onClick={() => onClick([createJob()])}
                        className={classnames([
                            'button',
                            { 'is-info': jobsQuantity === 1 },
                        ])}
                    >
                        One
                    </span>
                </p>
                <p className="control">
                    <span
                        onClick={() => onClick([createJob(), createJob()])}
                        className={classnames([
                            'button',
                            { 'is-info': jobsQuantity === 2 },
                        ])}
                    >
                        Two
                    </span>
                </p>
                <p className="control">
                    <span
                        onClick={() =>
                            onClick([createJob(), createJob(), createJob()])
                        }
                        className={classnames([
                            'button',
                            { 'is-info': jobsQuantity === 3 },
                        ])}
                    >
                        Three
                    </span>
                </p>
            </div>
        </div>
    );
}

export default JobsQuantityForm;
