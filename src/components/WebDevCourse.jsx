import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WebDevCourse.css';

const WebDevCourse = () => {
    const [currentVideo, setCurrentVideo] = useState('HcOc7P5BMi4');
    const [currentTopic, setCurrentTopic] = useState('HTML Fundamentals');
    const [currentDescription, setCurrentDescription] = useState('Learn the fundamentals of HTML5, including tags, elements, and document structure.');

    const loadVideo = (videoId, topic, description) => {
        setCurrentVideo(videoId);
        setCurrentTopic(topic);
        setCurrentDescription(description);
    };

    return (
        <div className="course-container">
            <div className="course-header">
                <h1>Complete Web Development Course</h1>
                <p>Master web development from scratch with our comprehensive course covering HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.</p>
            </div>

            <div className="course-layout">
                {/* Side Menu */}
                <div className="side-menu">
                    <div className="menu-section">
                        <h3>HTML & CSS</h3>
                        <div className="menu-item active" onClick={() => loadVideo('HcOc7P5BMi4', 'HTML Fundamentals', 'Learn the fundamentals of HTML5, including tags, elements, and document structure.')}>
                            <i className="fab fa-html5"></i>
                            <span>HTML Fundamentals</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('ESnrn1kAD4E', 'CSS Styling', 'Master CSS styling, including selectors, properties, layouts, and responsive design.')}>
                            <i className="fab fa-css3-alt"></i>
                            <span>CSS Styling</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('VlPiVmYuoqw', 'JavaScript Fundamentals', 'Learn JavaScript programming fundamentals and DOM manipulation.')}>
                            <i className="fab fa-js"></i>
                            <span>JavaScript</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Projects</h3>
                        <div className="menu-item" onClick={() => loadVideo('nGhKIC_7Mkk', 'Project 1', 'Build your first web project using HTML, CSS, and JavaScript.')}>
                            <i className="fas fa-laptop-code"></i>
                            <span>Project 1</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('SqrppLEljkY', 'Project 2', 'Create an advanced interactive web application.')}>
                            <i className="fas fa-code"></i>
                            <span>Project 2</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('SqrppLEljkY', 'Project 3', 'Build a full-stack web application.')}>
                            <i className="fas fa-project-diagram"></i>
                            <span>Project 3</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Advanced Topics</h3>
                        <div className="menu-item" onClick={() => loadVideo('E6tAtRi82QY', 'React.js', 'Learn modern UI development with React.js, including hooks, components, and state management.')}>
                            <i className="fab fa-react"></i>
                            <span>React.js</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('BLl32FvcdVM', 'Node.js Backend', 'Master backend development with Node.js and Express.js framework.')}>
                            <i className="fas fa-server"></i>
                            <span>Backend (Node.js)</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('J6mDkcqU_ZE', 'MongoDB', 'Learn NoSQL database management with MongoDB, including CRUD operations and data modeling.')}>
                            <i className="fas fa-database"></i>
                            <span>MongoDB</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('Ez8F0nW6S-w', 'Git & GitHub', 'Master version control with Git and collaboration with GitHub.')}>
                            <i className="fab fa-git-alt"></i>
                            <span>Git & GitHub</span>
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
                                title="Course Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Notes Download Section */}
                    <div className="notes-section">
                        <div className="notes-info">
                            <h3>Course Notes</h3>
                            <p>Download comprehensive notes for this course to enhance your learning experience.</p>
                        </div>
                        <a href="https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl" target="_blank" className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Notes
                        </a>
                    </div>
                </div>
            </div>

            {/* Course Outcomes Section */}
            <div className="course-section">
                <h2>What You'll Learn</h2>
                <div className="course-grid">
                    <div className="course-card">
                        <h3><i className="fas fa-code"></i> Frontend Development</h3>
                        <ul>
                            <li>HTML5 - Structure and semantics</li>
                            <li>CSS3 - Styling and animations</li>
                            <li>JavaScript - Core concepts and DOM manipulation</li>
                            <li>React.js - Modern UI development</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-server"></i> Backend Development</h3>
                        <ul>
                            <li>Node.js - Server-side programming</li>
                            <li>Express.js - Web application framework</li>
                            <li>RESTful API development</li>
                            <li>Authentication and authorization</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-database"></i> Database</h3>
                        <ul>
                            <li>MongoDB - NoSQL database</li>
                            <li>Database design and modeling</li>
                            <li>CRUD operations</li>
                            <li>Data relationships</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-tools"></i> Additional Skills</h3>
                        <ul>
                            <li>Git version control</li>
                            <li>Deployment and hosting</li>
                            <li>Performance optimization</li>
                            <li>Security best practices</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Course Benefits Section */}
            <div className="course-section">
                <h2>Course Benefits</h2>
                <div className="course-grid">
                    <div className="course-card">
                        <h3><i className="fas fa-graduation-cap"></i> Learning Experience</h3>
                        <ul>
                            <li>Comprehensive learning path</li>
                            <li>Industry-standard technologies</li>
                            <li>Practical projects</li>
                            <li>Flexible learning pace</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-briefcase"></i> Career Growth</h3>
                        <ul>
                            <li>Career opportunities</li>
                            <li>Portfolio development</li>
                            <li>Certificate of completion</li>
                            <li>Community support</li>
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
                        <span>No prior programming experience required</span>
                    </div>
                    <div className="requirement-item">
                        <i className="fas fa-clock"></i>
                        <span>2-3 hours daily commitment</span>
                    </div>
                    <div className="requirement-item">
                        <i className="fas fa-wifi"></i>
                        <span>Computer with internet access</span>
                    </div>
                    <div className="requirement-item">
                        <i className="fas fa-heart"></i>
                        <span>Dedication to learn and practice</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDevCourse; 