/** @jsx jsx */

import { useReducer, Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import Hero from '../components/Hero';
import JobForm from '../components/JobForm';
import StatusForm from '../components/StatusForm';
import JobsQuantityForm from '../components/JobsQuantityForm';
import { EMPLOYED, UNEMPLOYED } from '../constants';
import { useStateValue } from '../hooks/useStateValue';

const mainCss = css`
    padding: 1.5rem;
`;

const createJob = () => {
    return {
        companyName: '',
        income: '',
        occupation: '',
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'currentStatusChange':
            return {
                ...state,
                currentStatus: action.payload,
                jobs: action.payload === UNEMPLOYED ? [] : state.jobs,
            };
        case 'jobsQuantityChange':
            return { ...state, jobs: action.payload };
        case 'jobFieldChange':
            const { jobs } = state;
            const {
                payload: { field, index, value },
            } = action;
            const job = jobs[index];
            const newJob = { ...job, [field]: value };
            const newJobs = jobs.map((j, i) => (i === index ? newJob : j));
            return { ...state, jobs: newJobs };
        default:
            return state;
    }
};

function EditJobsPage({ history }) {
    const [gState, gDispatch] = useStateValue();

    const initialState = {
        currentStatus: gState.currentStatus || UNEMPLOYED,
        jobs: gState.jobs.length ? gState.jobs : [createJob],
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    function renderEmployed() {
        return (
            <Fragment>
                <JobsQuantityForm
                    dispatch={dispatch}
                    jobsQuantity={state.jobs.length}
                    createJob={createJob}
                />

                {state.jobs.map((job, i) => (
                    <JobForm
                        dispatch={dispatch}
                        index={i}
                        {...job}
                        number={i + 1}
                        key={i + 1}
                    />
                ))}
            </Fragment>
        );
    }

    function onSubmit() {
        gDispatch({
            type: 'updateJobs',
            payload: state,
        });

        history.push('/jobs');
    }

    return (
        <div>
            <Hero title="Edit your Jobs" subTitle="Update your info" />
            <div className="container">
                <div css={mainCss}>
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <nav
                                className="breadcrumb has-arrow-separator"
                                aria-label="breadcrumbs"
                            >
                                <ul>
                                    <li>
                                        <Link to="/jobs">Your Jobs</Link>
                                    </li>
                                    <li className="is-active">
                                        <Link to="/edit">Edit your jobs</Link>
                                    </li>
                                </ul>
                            </nav>

                            <StatusForm
                                currentStatus={state.currentStatus}
                                dispatch={dispatch}
                            />

                            {state.currentStatus === EMPLOYED
                                ? renderEmployed()
                                : null}

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" onClick={onSubmit}>
                                        Submit
                                    </button>
                                </div>
                                <div className="control">
                                    <Link to="/jobs" className="button is-text">
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(EditJobsPage);
