import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CPPCourse.css';

const CPPCourse = () => {
    const [currentVideo, setCurrentVideo] = useState('e7sAf4SbS_g');
    const [currentTopic, setCurrentTopic] = useState('Introduction to C++');
    const [currentDescription, setCurrentDescription] = useState('Learn the fundamentals of C++ programming language and its core concepts.');

    const loadVideo = (videoId, topic, description) => {
        setCurrentVideo(videoId);
        setCurrentTopic(topic);
        setCurrentDescription(description);
    };

    return (
        <div className="course-container">
            <div className="course-header">
                <h1>C++ Programming Course</h1>
                <p>Master C++ programming from fundamentals to advanced concepts with practical examples and real-world applications.</p>
            </div>

            <div className="course-layout">
                {/* Side Menu */}
                <div className="side-menu">
                    <div className="menu-section">
                        <h3>C++ Fundamentals</h3>
                        <div className="menu-item active" onClick={() => loadVideo('e7sAf4SbS_g', 'Introduction to C++', 'Learn the fundamentals of C++ programming language and its core concepts.')}>
                            <i className="fas fa-code"></i>
                            <span>Introduction to C++</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('e7sAf4SbS_g', 'C++ Environment Setup', 'Set up your C++ development environment and start coding.')}>
                            <i className="fas fa-cogs"></i>
                            <span>C++ Environment Setup</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('e7sAf4SbS_g', 'Basic Syntax', 'Learn the basic syntax and structure of C++ programs.')}>
                            <i className="fas fa-puzzle-piece"></i>
                            <span>Basic Syntax</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Object-Oriented Programming</h3>
                        <div className="menu-item" onClick={() => loadVideo('e7sAf4SbS_g', 'Classes & Objects', 'Understand the concepts of classes and objects in C++.')}>
                            <i className="fas fa-cube"></i>
                            <span>Classes & Objects</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('e7sAf4SbS_g', 'Inheritance', 'Learn about inheritance and its implementation in C++.')}>
                            <i className="fas fa-sitemap"></i>
                            <span>Inheritance</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('e7sAf4SbS_g', 'Polymorphism', 'Explore polymorphism and its types in C++.')}>
                            <i className="fas fa-puzzle-piece"></i>
                            <span>Polymorphism</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Advanced Topics</h3>
                        <div className="menu-item" onClick={() => loadVideo('e7sAf4SbS_g', 'STL', 'Learn about the Standard Template Library in C++.')}>
                            <i className="fas fa-database"></i>
                            <span>STL (Standard Template Library)</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('e7sAf4SbS_g', 'File Handling', 'Understand file operations in C++.')}>
                            <i className="fas fa-tasks"></i>
                            <span>File Handling</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('e7sAf4SbS_g', 'Exception Handling', 'Learn about exception handling in C++.')}>
                            <i className="fas fa-file-code"></i>
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
                                title="C++ Programming Tutorial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Notes Download Section */}
                    <div className="notes-section">
                        <div className="notes-info">
                            <h3>C++ Programming Notes</h3>
                            <p>Download comprehensive C++ programming notes to enhance your learning experience.</p>
                        </div>
                        <a href="/notes/sub_notes/C.pdf" target="_blank" className="download-btn">
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
                        <h3><i className="fas fa-code"></i> Core C++ Fundamentals</h3>
                        <ul>
                            <li>C++ syntax and basic programming concepts</li>
                            <li>Object-Oriented Programming principles</li>
                            <li>Data types, variables, and operators</li>
                            <li>Control structures and loops</li>
                            <li>Arrays and String manipulation</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-layer-group"></i> Advanced C++ Concepts</h3>
                        <ul>
                            <li>Pointers and References</li>
                            <li>STL (Standard Template Library)</li>
                            <li>File handling and I/O operations</li>
                            <li>Exception handling</li>
                            <li>Memory management</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-tools"></i> Practical Skills</h3>
                        <ul>
                            <li>Building console applications</li>
                            <li>Data structures implementation</li>
                            <li>Algorithm development</li>
                            <li>Debugging techniques</li>
                            <li>Code optimization</li>
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

export default CPPCourse; 