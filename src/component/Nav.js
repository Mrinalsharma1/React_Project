import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <NavLink className="navbar-brand text-light" to="#"><strong>CURD PHP</strong></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link text-light" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/view">View</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="text-center text-warning mt-3"><h4>Welcome To CURD World</h4></div>
        </div>
    )
}
export default Nav;
