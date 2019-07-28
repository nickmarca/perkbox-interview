import React from 'react';
import { EMPLOYED, UNEMPLOYED } from '../constants';

function StatusForm({ currentStatus, dispatch }) {
    const onChange = ({ target }) => {
        dispatch({
            type: 'currentStatusChange',
            payload: target.value,
        });
    };

    return (
        <div className="box">
            <p
                style={{ marginBottom: 30 }}
                className="is-size-7 has-text-grey-light"
            >
                Current status
            </p>

            <div className="field">
                <label className="label">What is your current status ?</label>
                <div className="control">
                    <div className="select">
                        <select value={currentStatus} onChange={onChange}>
                            <option value={EMPLOYED}>Employed</option>
                            <option value={UNEMPLOYED}>Unemployed</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusForm;
