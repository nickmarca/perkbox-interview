/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { occupations } from '../constants';

function JobForm({ number, dispatch, companyName, occupation, income, index }) {
    const onChange = (field, value) => {
        dispatch({
            type: 'jobFieldChange',
            payload: {
                index,
                field,
                value,
            },
        });
    };

    return (
        <div className="box">
            <p
                style={{ marginBottom: 30 }}
                className="is-size-7 has-text-grey-light"
            >
                JOB {number}
            </p>
            <div className="field">
                <label className="label">Company name</label>
                <div className="control">
                    <input
                        onChange={({ target }) =>
                            onChange('companyName', target.value)
                        }
                        value={companyName}
                        className="input"
                        type="text"
                        placeholder="e.g Perkbox"
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">What is your occupation ?</label>
                <div className="control">
                    <div className="select">
                        <select
                            value={occupation}
                            onChange={({ target }) =>
                                onChange('occupation', target.value)
                            }
                        >
                            {occupations.map(i => (
                                <option value={i} key={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Income</label>
                <div className="field has-addons">
                    <p className="control">
                        <input
                            onChange={({ target }) =>
                                onChange('income', target.value)
                            }
                            value={income}
                            className="input"
                            type="text"
                            placeholder="e.g 10000,00"
                        />
                    </p>
                    <p className="control">
                        <span className="button is-static">GBP</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default JobForm;
