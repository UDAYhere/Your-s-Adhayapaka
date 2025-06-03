import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MySQLCourse.css';

const MySQLCourse = () => {
    const [currentVideo, setCurrentVideo] = useState('hlGoQC332VM');
    const [currentTopic, setCurrentTopic] = useState('Introduction to MySQL');
    const [currentDescription, setCurrentDescription] = useState('Learn the fundamentals of MySQL database management and its role in modern applications.');

    const loadVideo = (videoId, topic, description) => {
        setCurrentVideo(videoId);
        setCurrentTopic(topic);
        setCurrentDescription(description);
    };

    return (
        <div className="course-container">
            <div className="course-header">
                <h1>MySQL Database Course</h1>
                <p>Master MySQL database management with comprehensive tutorials covering SQL queries, database design, and optimization techniques.</p>
            </div>

            <div className="course-layout">
                {/* Side Menu */}
                <div className="side-menu">
                    <div className="menu-section">
                        <h3>MySQL Fundamentals</h3>
                        <div className="menu-item active" onClick={() => loadVideo('hlGoQC332VM', 'Introduction to MySQL', 'Learn the fundamentals of MySQL database management and its role in modern applications.')}>
                            <i className="fas fa-code"></i>
                            <span>Introduction to MySQL</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('hlGoQC332VM', 'Database Design', 'Understand database design principles and best practices.')}>
                            <i className="fas fa-cogs"></i>
                            <span>Database Design</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('hlGoQC332VM', 'SQL Basics', 'Master the fundamentals of SQL queries and operations.')}>
                            <i className="fas fa-puzzle-piece"></i>
                            <span>SQL Basics</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Advanced SQL</h3>
                        <div className="menu-item" onClick={() => loadVideo('hlGoQC332VM', 'Complex Queries', 'Learn to write and optimize complex SQL queries.')}>
                            <i className="fas fa-database"></i>
                            <span>Complex Queries</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('hlGoQC332VM', 'Joins & Subqueries', 'Master different types of joins and subqueries in MySQL.')}>
                            <i className="fas fa-sitemap"></i>
                            <span>Joins & Subqueries</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('hlGoQC332VM', 'Stored Procedures', 'Learn to create and use stored procedures in MySQL.')}>
                            <i className="fas fa-cube"></i>
                            <span>Stored Procedures</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Database Management</h3>
                        <div className="menu-item" onClick={() => loadVideo('hlGoQC332VM', 'Indexing & Optimization', 'Learn about indexing strategies and query optimization.')}>
                            <i className="fas fa-file-code"></i>
                            <span>Indexing & Optimization</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('hlGoQC332VM', 'Backup & Recovery', 'Master database backup and recovery techniques.')}>
                            <i className="fas fa-tasks"></i>
                            <span>Backup & Recovery</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('hlGoQC332VM', 'Security & Access Control', 'Learn about MySQL security features and access control.')}>
                            <i className="fas fa-exclamation-triangle"></i>
                            <span>Security & Access Control</span>
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
                                title="MySQL Database Tutorial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Notes Download Section */}
                    <div className="notes-section">
                        <div className="notes-info">
                            <h3>MySQL Database Notes</h3>
                            <p>Download comprehensive MySQL database notes to enhance your learning experience.</p>
                        </div>
                        <a href="/notes/sub_notes/MySQL.pdf" target="_blank" className="download-btn">
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
                        <h3><i className="fas fa-code"></i> Database Fundamentals</h3>
                        <ul>
                            <li>Database design principles</li>
                            <li>SQL basics and syntax</li>
                            <li>Data types and constraints</li>
                            <li>Table creation and management</li>
                            <li>CRUD operations</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-layer-group"></i> Advanced SQL</h3>
                        <ul>
                            <li>Complex queries</li>
                            <li>Joins and subqueries</li>
                            <li>Stored procedures</li>
                            <li>Triggers and views</li>
                            <li>Transactions management</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-tools"></i> Performance & Security</h3>
                        <ul>
                            <li>Indexing strategies</li>
                            <li>Query optimization</li>
                            <li>Backup and recovery</li>
                            <li>User management</li>
                            <li>Security best practices</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-project-diagram"></i> Practical Applications</h3>
                        <ul>
                            <li>Database design projects</li>
                            <li>Application integration</li>
                            <li>Data migration</li>
                            <li>Performance tuning</li>
                            <li>Real-world scenarios</li>
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
                            <li>Database Administrator</li>
                            <li>Database Developer</li>
                            <li>Data Analyst</li>
                            <li>Backend Developer</li>
                            <li>Database Consultant</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-graduation-cap"></i> Learning Experience</h3>
                        <ul>
                            <li>Structured learning path</li>
                            <li>Hands-on exercises</li>
                            <li>Real-world projects</li>
                            <li>Industry best practices</li>
                            <li>Practical assignments</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-chart-line"></i> Skill Development</h3>
                        <ul>
                            <li>Database design</li>
                            <li>SQL programming</li>
                            <li>Performance optimization</li>
                            <li>Data management</li>
                            <li>Problem-solving</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-certificate"></i> Professional Growth</h3>
                        <ul>
                            <li>Industry certification</li>
                            <li>Portfolio development</li>
                            <li>Career advancement</li>
                            <li>Community networking</li>
                            <li>Continuous learning</li>
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
                        <span>Basic programming concepts</span>
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

export default MySQLCourse; 