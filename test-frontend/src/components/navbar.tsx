import React from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.scss';

const NavbarComponent: React.FC = () => {

    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark py-3" style={{ backgroundColor: '#172234' }}>
                <div className="container">
                    <Link className="navbar-brand text-primary" to="/">MyApp</Link>
                    {!isLoggedIn && !isLoginPage && (
                        <div className="d-flex">
                            <Link className="btn btn-outline-primary login-btn me-2" to="/login">Log In</Link>
                            <Link className="btn btn-primary signup-btn" to="/signup">Sign Up</Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent;