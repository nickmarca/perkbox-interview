/** @jsx jsx */

import { Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Job from '../components/Job';
import Status from '../components/Status';
import { useStateValue } from '../hooks/useStateValue';
import { EMPLOYED, UNEMPLOYED } from '../constants';

const mainCss = css`
    padding: 1.5rem;
`;

function JobsPage() {
    const [{ currentStatus, jobs }] = useStateValue();

    return (
        <div>
            <Hero title="Jobs" subTitle="All your jobs here" />
            <div className="container">
                <div css={mainCss}>
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            {!currentStatus ? emptyState() : null}

                            {currentStatus === EMPLOYED
                                ? renderEmployed(jobs)
                                : null}

                            {currentStatus === UNEMPLOYED
                                ? renderUnemployed()
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function emptyState() {
    return (
        <div className="box">
            <div className="content">
                <h5 style={{ textAlign: 'center' }}>
                    Please Starting filling out your jobs information
                </h5>
            </div>
            <Link
                to="/edit/jobs"
                className="button is-primary is-outlined is-fullwidth is-rounded"
            >
                <span className="icon is-small">
                    <i className="fas fa-plus" />
                </span>
                <span>Add a new Job</span>
            </Link>
        </div>
    );
}

function renderEmployed(jobs) {
    return (
        <Fragment>
            <Status status={EMPLOYED} />
            {jobs.map((job, i) => (
                <Job {...job} key={i + 1} />
            ))}
            <Link to="/edit/jobs" className="button is-primary">
                Edit your jobs
            </Link>
        </Fragment>
    );
}

function renderUnemployed() {
    return (
        <Fragment>
            <Status status={UNEMPLOYED} />

            <div className="box">
                <div className="content">
                    <h5 style={{ textAlign: 'center' }}>
                        It seems like you are taking a break. Enjoy ;).
                    </h5>
                </div>
                <a
                    href="https://linkedin.com"
                    className="button is-link is-fullwidth is-rounded"
                >
                    <span>Find a new job on Linked</span>
                    <span className="icon is-small">
                        <i className="fab fa-linkedin-in" />
                    </span>
                </a>
                <p style={{ textAlign: 'center', margin: '10px 0' }}>or</p>
                <Link
                    to="/edit/jobs"
                    className="button is-primary is-outlined is-fullwidth is-rounded"
                >
                    <span className="icon is-small">
                        <i className="fas fa-plus" />
                    </span>
                    <span>Add a new Job</span>
                </Link>
            </div>
        </Fragment>
    );
}

export default JobsPage;
