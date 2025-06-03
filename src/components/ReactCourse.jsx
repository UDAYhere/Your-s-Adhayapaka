import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReactCourse.css';

const ReactCourse = () => {
    const [currentVideo, setCurrentVideo] = useState('E6tAtRi82QY');
    const [currentTopic, setCurrentTopic] = useState('Introduction to React');
    const [currentDescription, setCurrentDescription] = useState('Learn the fundamentals of React.js and its component-based architecture.');

    const loadVideo = (videoId, topic, description) => {
        setCurrentVideo(videoId);
        setCurrentTopic(topic);
        setCurrentDescription(description);
    };

    return (
        <div className="course-container">
            <div className="course-header">
                <h1>React.js Development Course</h1>
                <p>Master modern UI development with React.js, including hooks, state management, and component architecture.</p>
            </div>

            <div className="course-layout">
                {/* Side Menu */}
                <div className="side-menu">
                    <div className="menu-section">
                        <h3>React Fundamentals</h3>
                        <div className="menu-item active" onClick={() => loadVideo('E6tAtRi82QY', 'Introduction to React', 'Learn the fundamentals of React.js and its component-based architecture.')}>
                            <i className="fas fa-code"></i>
                            <span>Introduction to React</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('E6tAtRi82QY', 'React Environment Setup', 'Set up your React development environment and learn about create-react-app.')}>
                            <i className="fas fa-cogs"></i>
                            <span>React Environment Setup</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('E6tAtRi82QY', 'Components & JSX', 'Learn about React components and JSX syntax.')}>
                            <i className="fas fa-puzzle-piece"></i>
                            <span>Components & JSX</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>State & Hooks</h3>
                        <div className="menu-item" onClick={() => loadVideo('E6tAtRi82QY', 'useState & useEffect', 'Master React hooks for state management and side effects.')}>
                            <i className="fas fa-database"></i>
                            <span>useState & useEffect</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('E6tAtRi82QY', 'Custom Hooks', 'Learn to create and use custom hooks in React.')}>
                            <i className="fas fa-sitemap"></i>
                            <span>Custom Hooks</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('E6tAtRi82QY', 'Context API', 'Understand React Context API for global state management.')}>
                            <i className="fas fa-cube"></i>
                            <span>Context API</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Advanced Topics</h3>
                        <div className="menu-item" onClick={() => loadVideo('E6tAtRi82QY', 'Routing with React Router', 'Learn to implement routing in React applications.')}>
                            <i className="fas fa-file-code"></i>
                            <span>Routing with React Router</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('E6tAtRi82QY', 'State Management (Redux)', 'Master Redux for complex state management.')}>
                            <i className="fas fa-tasks"></i>
                            <span>State Management (Redux)</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('E6tAtRi82QY', 'Error Boundaries', 'Learn to handle errors gracefully in React applications.')}>
                            <i className="fas fa-exclamation-triangle"></i>
                            <span>Error Boundaries</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <h2 className="topic-title">{currentTopic}</h2>
                    <p className="topic-description">{currentDescription}</p>

                    {/* Video Section */}
                    <div className="video-container">
                        <div className="video-wrapper">
                            <iframe
                                id="videoPlayer"
                                src={`https://www.youtube.com/embed/${currentVideo}`}
                                title="React.js Development Tutorial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Notes Download Section */}
                    <div className="notes-section">
                        <div className="notes-info">
                            <h3>React.js Development Notes</h3>
                            <p>Download comprehensive React.js development notes to enhance your learning experience.</p>
                        </div>
                        <a href="/notes/sub_notes/React.pdf" target="_blank" className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Notes
                        </a>
                    </div>
                </div>
            </div>

            {/* Course Outcomes Section */}
            <div className="course-section">
                <h2>Course Outcomes</h2>
                <div className="course-grid">
                    <div className="course-card">
                        <h3><i className="fas fa-code"></i> Core React Fundamentals</h3>
                        <ul>
                            <li>React components and JSX</li>
                            <li>Props and state management</li>
                            <li>Event handling</li>
                            <li>Lifecycle methods</li>
                            <li>Virtual DOM concepts</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-layer-group"></i> Modern React Features</h3>
                        <ul>
                            <li>React Hooks (useState, useEffect)</li>
                            <li>Custom hooks development</li>
                            <li>Context API usage</li>
                            <li>Error boundaries</li>
                            <li>React Router implementation</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-tools"></i> State Management</h3>
                        <ul>
                            <li>Redux fundamentals</li>
                            <li>Redux Toolkit usage</li>
                            <li>State persistence</li>
                            <li>Middleware implementation</li>
                            <li>Async actions handling</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-project-diagram"></i> Project Development</h3>
                        <ul>
                            <li>Full-stack applications</li>
                            <li>API integration</li>
                            <li>Authentication systems</li>
                            <li>Performance optimization</li>
                            <li>Testing and deployment</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Course Benefits Section */}
            <div className="course-section">
                <h2>Course Benefits</h2>
                <div className="course-grid">
                    <div className="course-card">
                        <h3><i className="fas fa-laptop-code"></i> Career Opportunities</h3>
                        <ul>
                            <li>Frontend Development</li>
                            <li>Full-stack Development</li>
                            <li>UI/UX Development</li>
                            <li>Mobile App Development</li>
                            <li>Enterprise Applications</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-graduation-cap"></i> Learning Experience</h3>
                        <ul>
                            <li>Structured learning path</li>
                            <li>Hands-on coding exercises</li>
                            <li>Interactive problem-solving</li>
                            <li>Industry-standard practices</li>
                            <li>Regular assignments and projects</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-chart-line"></i> Skill Development</h3>
                        <ul>
                            <li>Component architecture</li>
                            <li>State management</li>
                            <li>Performance optimization</li>
                            <li>Testing methodologies</li>
                            <li>Modern development tools</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-certificate"></i> Professional Growth</h3>
                        <ul>
                            <li>Industry recognition</li>
                            <li>Portfolio development</li>
                            <li>Certification preparation</li>
                            <li>Community networking</li>
                            <li>Continuous learning resources</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Course Requirements Section */}
            <div className="course-section">
                <h2>Course Requirements</h2>
                <div className="requirements-list">
                    <div className="requirement-item">
                        <i className="fas fa-laptop"></i>
                        <span>Basic computer knowledge</span>
                    </div>
                    <div className="requirement-item">
                        <i className="fas fa-code"></i>
                        <span>JavaScript fundamentals</span>
                    </div>
                    <div className="requirement-item">
                        <i className="fas fa-clock"></i>
                        <span>Dedication to practice regularly</span>
                    </div>
                    <div className="requirement-item">
                        <i className="fas fa-wifi"></i>
                        <span>Stable internet connection</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactCourse; 