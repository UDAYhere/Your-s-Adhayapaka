import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">YA</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/roadmaps">Roadmaps</Link></li>
                <li><Link to="/notes">Notes</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="auth-buttons">
                <button onClick={toggleTheme} id="theme-toggle-btn" className="theme-toggle">
                    <i className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`}></i>
                </button>
                <Link to="/login" className="login-btn">Login</Link>
                <Link to="/signup" className="signup-btn">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar; 