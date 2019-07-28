/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Link, NavLink } from 'react-router-dom';

function TopNavbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h3  style={{ letterSpacing: 2 }} className="title is-3">PERKBOX</h3>
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink activeClassName="is-active" className="navbar-item" to="/jobs">
                        Jobs
                    </NavLink>

                    <NavLink activeClassName="is-active" className="navbar-item" to="/todos">
                        Todos
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;