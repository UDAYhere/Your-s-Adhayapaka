import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JavaCourse.css';

const JavaCourse = () => {
    const [currentVideo, setCurrentVideo] = useState('NNLoi8QqzaY');
    const [currentTopic, setCurrentTopic] = useState('Introduction to Java');
    const [currentDescription, setCurrentDescription] = useState('Learn the fundamentals of Java programming language and its core concepts.');

    const loadVideo = (videoId, topic, description) => {
        setCurrentVideo(videoId);
        setCurrentTopic(topic);
        setCurrentDescription(description);
    };

    return (
        <div className="course-container">
            <div className="course-header">
                <h1>Java Programming Course</h1>
                <p>Master Java programming from fundamentals to advanced concepts with practical examples and real-world applications.</p>
            </div>

            <div className="course-layout">
                {/* Side Menu */}
                <div className="side-menu">
                    <div className="menu-section">
                        <h3>Java Fundamentals</h3>
                        <div className="menu-item active" onClick={() => loadVideo('NNLoi8QqzaY', 'Introduction to Java', 'Learn the fundamentals of Java programming language and its core concepts.')}>
                            <i className="fas fa-code"></i>
                            <span>Introduction to Java</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('NNLoi8QqzaY', 'Java Environment Setup', 'Set up your Java development environment and start coding.')}>
                            <i className="fas fa-cogs"></i>
                            <span>Java Environment Setup</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('NNLoi8QqzaY', 'Basic Syntax', 'Learn the basic syntax and structure of Java programs.')}>
                            <i className="fas fa-puzzle-piece"></i>
                            <span>Basic Syntax</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Object-Oriented Programming</h3>
                        <div className="menu-item" onClick={() => loadVideo('NNLoi8QqzaY', 'Classes & Objects', 'Understand the concepts of classes and objects in Java.')}>
                            <i className="fas fa-cube"></i>
                            <span>Classes & Objects</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('NNLoi8QqzaY', 'Inheritance', 'Learn about inheritance and its implementation in Java.')}>
                            <i className="fas fa-sitemap"></i>
                            <span>Inheritance</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('NNLoi8QqzaY', 'Polymorphism', 'Explore polymorphism and its types in Java.')}>
                            <i className="fas fa-puzzle-piece"></i>
                            <span>Polymorphism</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Advanced Topics</h3>
                        <div className="menu-item" onClick={() => loadVideo('NNLoi8QqzaY', 'Collections Framework', 'Learn about the Collections Framework in Java.')}>
                            <i className="fas fa-database"></i>
                            <span>Collections Framework</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('NNLoi8QqzaY', 'Multithreading', 'Understand multithreading and concurrency in Java.')}>
                            <i className="fas fa-tasks"></i>
                            <span>Multithreading</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('NNLoi8QqzaY', 'File I/O', 'Learn about file operations in Java.')}>
                            <i className="fas fa-file-code"></i>
                            <span>File I/O</span>
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
                                title="Java Programming Tutorial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Notes Download Section */}
                    <div className="notes-section">
                        <div className="notes-info">
                            <h3>Java Programming Notes</h3>
                            <p>Download comprehensive Java programming notes to enhance your learning experience.</p>
                        </div>
                        <a href="/notes/sub_notes/Java.pdf" target="_blank" className="download-btn">
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
                        <h3><i className="fas fa-code"></i> Core Java Fundamentals</h3>
                        <ul>
                            <li>Java syntax and basic programming concepts</li>
                            <li>Object-Oriented Programming principles</li>
                            <li>Data types, variables, and operators</li>
                            <li>Control structures and loops</li>
                            <li>Arrays and String manipulation</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-layer-group"></i> Advanced Java Concepts</h3>
                        <ul>
                            <li>Exception handling mechanisms</li>
                            <li>Collections Framework</li>
                            <li>Multithreading and concurrency</li>
                            <li>File I/O operations</li>
                            <li>JDBC for database connectivity</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-tools"></i> Practical Skills</h3>
                        <ul>
                            <li>Building console applications</li>
                            <li>GUI development with JavaFX</li>
                            <li>Database-driven applications</li>
                            <li>Unit testing with JUnit</li>
                            <li>Design patterns implementation</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-project-diagram"></i> Project Development</h3>
                        <ul>
                            <li>Real-world project experience</li>
                            <li>Best coding practices</li>
                            <li>Version control with Git</li>
                            <li>Code documentation</li>
                            <li>Problem-solving techniques</li>
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
                            <li>Java Developer positions</li>
                            <li>Android App Development</li>
                            <li>Backend Development roles</li>
                            <li>Software Engineering careers</li>
                            <li>Enterprise application development</li>
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
                            <li>Object-oriented thinking</li>
                            <li>Analytical problem solving</li>
                            <li>Clean code writing</li>
                            <li>Debugging techniques</li>
                            <li>Software architecture understanding</li>
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
                        <span>No prior programming experience needed</span>
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

export default JavaCourse; 