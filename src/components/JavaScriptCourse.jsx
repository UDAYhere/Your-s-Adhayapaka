import React, { useState } from 'react';
import './JavaScriptCourse.css';

const JavaScriptCourse = () => {
    const [currentVideo, setCurrentVideo] = useState('https://www.youtube.com/embed/PkZNo7MFNFg');
    const [currentTopic, setCurrentTopic] = useState('JavaScript Fundamentals');
    const [currentDescription, setCurrentDescription] = useState('Learn the basics of JavaScript programming language.');

    const loadVideo = (videoId, topic, description) => {
        setCurrentVideo(videoId);
        setCurrentTopic(topic);
        setCurrentDescription(description);
    };

    return (
        <div className="course-container">
            <div className="course-sidebar">
                <div className="sidebar-section">
                    <h3>JavaScript Fundamentals</h3>
                    <div className="sidebar-item" onClick={() => loadVideo('https://www.youtube.com/embed/PkZNo7MFNFg', 'JavaScript Fundamentals', 'Learn the basics of JavaScript programming language.')}>
                        Introduction to JavaScript
                    </div>
                    <div className="sidebar-item" onClick={() => loadVideo('https://www.youtube.com/embed/W6NZfCO5SIk', 'Variables and Data Types', 'Understand JavaScript variables and different data types.')}>
                        Variables and Data Types
                    </div>
                    <div className="sidebar-item" onClick={() => loadVideo('https://www.youtube.com/embed/IsG4Xd6LlsM', 'Operators and Expressions', 'Learn about JavaScript operators and expressions.')}>
                        Operators and Expressions
                    </div>
                </div>

                <div className="sidebar-section">
                    <h3>Advanced Concepts</h3>
                    <div className="sidebar-item" onClick={() => loadVideo('https://www.youtube.com/embed/3PHXvlpOkf4', 'Functions and Scope', 'Master JavaScript functions and scope concepts.')}>
                        Functions and Scope
                    </div>
                    <div className="sidebar-item" onClick={() => loadVideo('https://www.youtube.com/embed/3PHXvlpOkf4', 'Objects and Arrays', 'Learn about JavaScript objects and arrays.')}>
                        Objects and Arrays
                    </div>
                    <div className="sidebar-item" onClick={() => loadVideo('https://www.youtube.com/embed/3PHXvlpOkf4', 'DOM Manipulation', 'Understand DOM manipulation in JavaScript.')}>
                        DOM Manipulation
                    </div>
                </div>

                <div className="sidebar-section">
                    <h3>DOM & Web APIs</h3>
                    <div className="sidebar-item" onClick={() => loadVideo('https://www.youtube.com/embed/3PHXvlpOkf4', 'Event Handling', 'Learn about event handling in JavaScript.')}>
                        Event Handling
                    </div>
                    <div className="sidebar-item" onClick={() => loadVideo('https://www.youtube.com/embed/3PHXvlpOkf4', 'Async JavaScript', 'Master asynchronous JavaScript programming.')}>
                        Async JavaScript
                    </div>
                    <div className="sidebar-item" onClick={() => loadVideo('https://www.youtube.com/embed/3PHXvlpOkf4', 'Web APIs', 'Explore various Web APIs in JavaScript.')}>
                        Web APIs
                    </div>
                </div>
            </div>

            <div className="course-content">
                <div className="video-section">
                    <h2>{currentTopic}</h2>
                    <p>{currentDescription}</p>
                    <div className="video-container">
                        <iframe
                            width="100%"
                            height="500"
                            src={currentVideo}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="course-outcomes">
                    <h3>Course Outcomes</h3>
                    <ul>
                        <li>Master JavaScript fundamentals and advanced concepts</li>
                        <li>Learn DOM manipulation and event handling</li>
                        <li>Understand asynchronous programming</li>
                        <li>Build interactive web applications</li>
                        <li>Work with modern JavaScript features</li>
                    </ul>
                </div>

                <div className="course-benefits">
                    <h3>Benefits</h3>
                    <ul>
                        <li>Comprehensive JavaScript knowledge</li>
                        <li>Hands-on coding experience</li>
                        <li>Real-world project examples</li>
                        <li>Best practices and patterns</li>
                        <li>Career-ready skills</li>
                    </ul>
                </div>

                <div className="course-requirements">
                    <h3>Requirements</h3>
                    <ul>
                        <li>Basic computer knowledge</li>
                        <li>Understanding of HTML and CSS</li>
                        <li>Dedication to learn</li>
                        <li>Code editor (VS Code recommended)</li>
                        <li>Modern web browser</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JavaScriptCourse; 