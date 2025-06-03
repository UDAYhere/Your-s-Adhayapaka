import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-content">
                <h1>Unlock Your Potential with Expert-Led Online Learning</h1>
                <p>Discover courses that blend modern techniques with practical skills. Learn
                    from industry leaders and transform your career.</p>
                <Link to="/courses" className="cta-btn">Explore Courses</Link>
            </div>
        </header>
    );
};

export default Hero; 