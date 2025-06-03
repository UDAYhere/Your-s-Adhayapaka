import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MongoDBCourse.css';

const MongoDBCourse = () => {
    const [currentVideo, setCurrentVideo] = useState('J6mDkcqU_ZE');
    const [currentTopic, setCurrentTopic] = useState('Introduction to MongoDB');
    const [currentDescription, setCurrentDescription] = useState('Learn the fundamentals of MongoDB and its role in modern NoSQL database management.');

    const loadVideo = (videoId, topic, description) => {
        setCurrentVideo(videoId);
        setCurrentTopic(topic);
        setCurrentDescription(description);
    };

    return (
        <div className="course-container">
            <div className="course-header">
                <h1>MongoDB Course</h1>
                <p>Master MongoDB database management with comprehensive tutorials covering NoSQL concepts, document modeling, and data operations.</p>
            </div>

            <div className="course-layout">
                {/* Side Menu */}
                <div className="side-menu">
                    <div className="menu-section">
                        <h3>MongoDB Fundamentals</h3>
                        <div className="menu-item active" onClick={() => loadVideo('J6mDkcqU_ZE', 'Introduction to MongoDB', 'Learn the fundamentals of MongoDB and its role in modern NoSQL database management.')}>
                            <i className="fas fa-code"></i>
                            <span>Introduction to MongoDB</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('J6mDkcqU_ZE', 'Document Model', 'Understand MongoDB document model and data structure.')}>
                            <i className="fas fa-cogs"></i>
                            <span>Document Model</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('J6mDkcqU_ZE', 'CRUD Operations', 'Master MongoDB CRUD operations and data manipulation.')}>
                            <i className="fas fa-puzzle-piece"></i>
                            <span>CRUD Operations</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Advanced Concepts</h3>
                        <div className="menu-item" onClick={() => loadVideo('J6mDkcqU_ZE', 'Aggregation Pipeline', 'Learn about MongoDB aggregation framework and pipeline operations.')}>
                            <i className="fas fa-database"></i>
                            <span>Aggregation Pipeline</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('J6mDkcqU_ZE', 'Indexing & Performance', 'Understand MongoDB indexing and performance optimization.')}>
                            <i className="fas fa-sitemap"></i>
                            <span>Indexing & Performance</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('J6mDkcqU_ZE', 'Replication & Sharding', 'Explore MongoDB replication and sharding for scalability.')}>
                            <i className="fas fa-cube"></i>
                            <span>Replication & Sharding</span>
                        </div>
                    </div>

                    <div className="menu-section">
                        <h3>Integration & Tools</h3>
                        <div className="menu-item" onClick={() => loadVideo('J6mDkcqU_ZE', 'MongoDB Atlas', 'Learn about MongoDB Atlas cloud service and deployment.')}>
                            <i className="fas fa-file-code"></i>
                            <span>MongoDB Atlas</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('J6mDkcqU_ZE', 'Node.js Integration', 'Understand MongoDB integration with Node.js applications.')}>
                            <i className="fas fa-tasks"></i>
                            <span>Node.js Integration</span>
                        </div>
                        <div className="menu-item" onClick={() => loadVideo('J6mDkcqU_ZE', 'Security & Best Practices', 'Learn MongoDB security features and best practices.')}>
                            <i className="fas fa-exclamation-triangle"></i>
                            <span>Security & Best Practices</span>
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
                                title="MongoDB Tutorial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Notes Download Section */}
                    <div className="notes-section">
                        <div className="notes-info">
                            <h3>MongoDB Notes</h3>
                            <p>Download comprehensive MongoDB notes to enhance your learning experience.</p>
                        </div>
                        <a href="/notes/sub_notes/MongoDB.pdf" target="_blank" className="download-btn">
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
                        <h3><i className="fas fa-code"></i> NoSQL Fundamentals</h3>
                        <ul>
                            <li>Document-based data model</li>
                            <li>MongoDB architecture</li>
                            <li>CRUD operations</li>
                            <li>Data modeling</li>
                            <li>Query optimization</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-layer-group"></i> Advanced Features</h3>
                        <ul>
                            <li>Aggregation pipeline</li>
                            <li>Indexing strategies</li>
                            <li>Replication & sharding</li>
                            <li>Performance tuning</li>
                            <li>Security implementation</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-tools"></i> Integration & Tools</h3>
                        <ul>
                            <li>MongoDB Atlas</li>
                            <li>Node.js integration</li>
                            <li>Data migration</li>
                            <li>Backup & recovery</li>
                            <li>Monitoring tools</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-project-diagram"></i> Practical Applications</h3>
                        <ul>
                            <li>Real-world projects</li>
                            <li>Scalability solutions</li>
                            <li>Performance optimization</li>
                            <li>Best practices</li>
                            <li>Industry standards</li>
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
                            <li>MongoDB Developer</li>
                            <li>Database Administrator</li>
                            <li>Backend Developer</li>
                            <li>Data Engineer</li>
                            <li>Cloud Specialist</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-graduation-cap"></i> Learning Experience</h3>
                        <ul>
                            <li>Hands-on practice</li>
                            <li>Real-world projects</li>
                            <li>Industry best practices</li>
                            <li>Comprehensive coverage</li>
                            <li>Practical assignments</li>
                        </ul>
                    </div>

                    <div className="course-card">
                        <h3><i className="fas fa-chart-line"></i> Skill Development</h3>
                        <ul>
                            <li>NoSQL database design</li>
                            <li>Data modeling</li>
                            <li>Performance optimization</li>
                            <li>Cloud integration</li>
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

export default MongoDBCourse; 