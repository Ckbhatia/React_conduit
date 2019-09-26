import React from 'react';
import '../../App.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function Header() {

    return (
        <header className="main-header">
            {/* <Nav className="navigation-main-container navbar navbar-expand-sm navbar-dark px-sm-5" > */}
            <Nav className="navigation-main-container">
                <div className="nav-heading-container">
                    <Link className="nav-link-heading" to="/">
                        <h2 className="nav-list-heading">Top blog</h2>
                    </Link>
                </div>
                <div className="nav-list-container">
                    <ul className="nav-list-container">
                        <li className="list-item-links">
                            <Link className="link-item" to="/">Home</Link>
                            <Link className="link-item" to="/login">Sign in</Link>
                            <Link className="link-item" to="/register">Sign up</Link>
                        </li>
                    </ul>
                </div>
            </Nav>
        </header>
    )
}


// Nav element style
const Nav = styled.nav`
    color: var(--primaryColor);
    margin: 0.75rem 6rem;
    display: flex;
    justify-content: space-between;
`