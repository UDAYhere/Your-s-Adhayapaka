import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PythonCourse.css';

const PythonCourse = () => {
    const [currentVideo, setCurrentVideo] = useState('ERCMXc8x7mc');
    const [currentTopic, setCurrentTopic] = useState('Introduction to Python');
    const [currentDescription, setCurrentDescription] = useState('Learn the fundamentals of Python programming language and its core concepts.');

    const loadVideo = (videoId, topic, description) => {
        setCurrentVideo(videoId);
        setCurrentTopic(topic);
        setCurrentDescription(description);
    };

    return (
        <div className="course-container">
            <div className="course-header">
                <h1>Python Programming Course</h1>
                <p>Master Python programming from fundamentals to advanced concepts with practical examples and real-world applications.</p>
            </div>

            <div className="course-layout">
                {/* Side Menu */}
                <div className="side-menu">
                    <div className="menu-section">
                        <h3>Python Fundamentals</h3>
                        <div className="menu-item active" onClick={() => loadVideo('ERCMXc8x7mc', 'Introduction to Python', 'Learn the fundamentals of Python programming language and its core concepts.')}>
                            <i className="fas fa-code"></i>
                            <span>Introduction to Python</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('ERCMXc8x7mc', 'Python Environment Setup', 'Set up your Python development environment and learn about IDEs.')}>
                            <i className="fas fa-cogs"></i>
                            <span>Python Environment Setup</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('ERCMXc8x7mc', 'Basic Syntax', 'Learn Python syntax, variables, and basic operations.')}>
                            <i className="fas fa-puzzle-piece"></i>
                            <span>Basic Syntax</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Data Structures & OOP</h3>
                        <div className="menu-item" onClick={() => loadVideo('ERCMXc8x7mc', 'Lists, Tuples, Sets', 'Master Python data structures: lists, tuples, and sets.')}>
                            <i className="fas fa-database"></i>
                            <span>Lists, Tuples, Sets</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('ERCMXc8x7mc', 'Dictionaries & Collections', 'Learn about dictionaries and collections in Python.')}>
                            <i className="fas fa-sitemap"></i>
                            <span>Dictionaries & Collections</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('ERCMXc8x7mc', 'Object-Oriented Programming', 'Understand OOP concepts in Python.')}>
                            <i className="fas fa-cube"></i>
                            <span>Object-Oriented Programming</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Advanced Topics</h3>
                        <div className="menu-item" onClick={() => loadVideo('ERCMXc8x7mc', 'File Handling', 'Learn file operations and handling in Python.')}>
                            <i className="fas fa-file-code"></i>
                            <span>File Handling</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('ERCMXc8x7mc', 'Modules & Packages', 'Understand Python modules and package management.')}>
                            <i className="fas fa-tasks"></i>
                            <span>Modules & Packages</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('ERCMXc8x7mc', 'Exception Handling', 'Learn error handling and debugging in Python.')}>
                            <i className="fas fa-exclamation-triangle"></i>
                            <span>Exception Handling</span>
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
                                title="Python Programming Tutorial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Notes Download Section */}
                    <div className="notes-section">
                        <div className="notes-info">
                            <h3>Python Programming Notes</h3>
                            <p>Download comprehensive Python programming notes to enhance your learning experience.</p>
                        </div>
                        <a href="/notes/sub_notes/Python.pdf" target="_blank" className="download-btn">
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
                        <h3><i className="fas fa-code"></i> Core Python Fundamentals</h3>
                        <ul>
                            <li>Python syntax and basic programming concepts</li>
                            <li>Data types and variables</li>
                            <li>Control structures and loops</li>
                            <li>Functions and modules</li>
                            <li>Input/Output operations</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-layer-group"></i> Data Structures & OOP</h3>
                        <ul>
                            <li>Lists, tuples, and sets</li>
                            <li>Dictionaries and collections</li>
                            <li>Object-Oriented Programming</li>
                            <li>Inheritance and polymorphism</li>
                            <li>Encapsulation and abstraction</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-tools"></i> Practical Skills</h3>
                        <ul>
                            <li>File handling and I/O</li>
                            <li>Exception handling</li>
                            <li>Regular expressions</li>
                            <li>Database integration</li>
                            <li>API development</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-project-diagram"></i> Project Development</h3>
                        <ul>
                            <li>Web development with Django/Flask</li>
                            <li>Data analysis with Pandas</li>
                            <li>Machine learning basics</li>
                            <li>Automation scripts</li>
                            <li>GUI applications</li>
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
                            <li>Web Development</li>
                            <li>Data Science</li>
                            <li>Machine Learning</li>
                            <li>Automation</li>
                            <li>Software Development</li>
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
                            <li>Problem-solving abilities</li>
                            <li>Code optimization</li>
                            <li>Debugging techniques</li>
                            <li>Best coding practices</li>
                            <li>Version control with Git</li>
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

export default PythonCourse; 