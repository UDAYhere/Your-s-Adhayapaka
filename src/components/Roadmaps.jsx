import React from 'react';
import { Link } from 'react-router-dom';
import './Roadmaps.css';

const Roadmaps = () => {
    return (
        <div className="roadmaps-container">
            <div className="roadmaps-header">
                <h1>Learning Roadmaps</h1>
                <p>Choose your path and start your journey to becoming a professional developer</p>
            </div>

            <div className="roadmaps-grid">
                {/* Web Development Roadmap */}
                <div className="roadmap-card">
                    <div className="roadmap-icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p>Master full-stack web development from basics to advanced concepts</p>
                    <Link to="/roadmaps/web-development" className="explore-btn">View Roadmap</Link>
                </div>

                {/* Software Engineering Roadmap */}
                <div className="roadmap-card">
                    <div className="roadmap-icon">
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    <h3>Software Engineering</h3>
                    <p>Learn software development principles and best practices</p>
                    <Link to="/roadmaps/software-engineering" className="explore-btn">View Roadmap</Link>
                </div>

                {/* Android Development Roadmap */}
                <div className="roadmap-card">
                    <div className="roadmap-icon">
                        <i className="fab fa-android"></i>
                    </div>
                    <h3>Android Development</h3>
                    <p>Build native Android applications with Java and Kotlin</p>
                    <Link to="/roadmaps/android" className="explore-btn">View Roadmap</Link>
                </div>

                {/* Programming Languages */}
                <div className="roadmap-card">
                    <div className="roadmap-icon">
                        <i className="fas fa-file-code"></i>
                    </div>
                    <h3>Programming Languages</h3>
                    <p>Master popular programming languages</p>
                    <div className="language-icons">
                        <Link to="/roadmaps/c" className="explore-btn">C Roadmap</Link>
                        <Link to="/roadmaps/java" className="explore-btn">Java Roadmap</Link>
                        <Link to="/roadmaps/python" className="explore-btn">Python Roadmap</Link>
                    </div>
                </div>

                {/* DSA Roadmap */}
                <div className="roadmap-card">
                    <div className="roadmap-icon">
                        <i className="fas fa-project-diagram"></i>
                    </div>
                    <h3>Data Structures & Algorithms</h3>
                    <p>Master problem-solving and algorithmic thinking</p>
                    <Link to="/roadmaps/dsa" className="explore-btn">View Roadmap</Link>
                </div>

                {/* Frontend Roadmap */}
                <div className="roadmap-card">
                    <div className="roadmap-icon">
                        <i className="fas fa-paint-brush"></i>
                    </div>
                    <h3>Frontend Development</h3>
                    <p>Learn modern frontend technologies</p>
                    <div className="tech-icons">
                        <Link to="/roadmaps/react" className="explore-btn">React Roadmap</Link>
                        <Link to="/roadmaps/javascript" className="explore-btn">JavaScript Roadmap</Link>
                    </div>
                </div>

                {/* Backend Roadmap */}
                <div className="roadmap-card">
                    <div className="roadmap-icon">
                        <i className="fas fa-server"></i>
                    </div>
                    <h3>Backend Development</h3>
                    <p>Master server-side development and databases</p>
                    <div className="tech-icons">
                        <Link to="/roadmaps/mongodb" className="explore-btn">MongoDB Roadmap</Link>
                        <Link to="/roadmaps/mysql" className="explore-btn">MySQL Roadmap</Link>
                    </div>
                </div>

                {/* DevOps Roadmap */}
                <div className="roadmap-card">
                    <div className="roadmap-icon">
                        <i className="fas fa-network-wired"></i>
                    </div>
                    <h3>DevOps</h3>
                    <p>Learn deployment, CI/CD, and infrastructure management</p>
                    <Link to="/roadmaps/devops" className="explore-btn">View Roadmap</Link>
                </div>
            </div>
        </div>
    );
};

export default Roadmaps; 