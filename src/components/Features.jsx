import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features">
            <h2>Why Choose Us</h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <i className="fas fa-laptop-code"></i>
                    <h3>Expert Support</h3>
                    <p>Get 24/7 support from our experienced instructors and community.</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-clock"></i>
                    <h3>Flexible Learning</h3>
                    <p>Learn at your own pace with lifetime access to course materials.</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-certificate"></i>
                    <h3>Certification</h3>
                    <p>Earn certificates upon completion of your courses.</p>
                </div>
            </div>
        </section>
    );
};

export default Features; 