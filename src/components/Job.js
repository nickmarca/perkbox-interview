/** @jsx jsx */

import { jsx, css } from '@emotion/core';

const containerCss = css`
    margin-bottom: 15px;
`;

const contentCss = css`
    display: flex;
`;

const companyLogoCss = css`
    margin-right: 12px;
`;

function Job({ companyName, income, occupation }) {
    return (
        <div css={containerCss}>
            <div className="box">
                <div css={contentCss}>
                    <div css={companyLogoCss}>
                        <span className="is-size-1 has-text-grey-lighter is-capitalized has-text-weight-bold">
                            {companyName.split('')[0]}
                        </span>
                    </div>
                    <div className="content is-small">
                        <p>
                            {' '}
                            <strong>Company: </strong> {companyName}
                        </p>
                        <p>
                            {' '}
                            <strong>Occupation: </strong> {occupation}
                        </p>
                        <p>
                            {' '}
                            <strong>Income: </strong> {income} GBP
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Job;
