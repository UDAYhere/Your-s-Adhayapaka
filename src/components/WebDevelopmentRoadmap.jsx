import React from 'react';
import { Link } from 'react-router-dom';
import './WebDevelopmentRoadmap.css';

const WebDevelopmentRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>Web Development Roadmap</h1>
                <p>Follow this comprehensive roadmap to become a professional web developer</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">HTML & CSS</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the fundamentals of web development.</p>
                        <div className="step-topics">
                            <div className="step-topic">HTML5 Structure and Elements</div>
                            <div className="step-topic">CSS3 Styling and Layout</div>
                            <div className="step-topic">Responsive Design</div>
                            <div className="step-topic">CSS Frameworks (Bootstrap, Tailwind)</div>
                        </div>
                        <div className="resources">
                            <h4>Recommended Resources:</h4>
                            <a href="/notes/sub_notes/WebDev.pdf" className="resource-link" target="_blank">Web Development Notes</a>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">JavaScript</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn JavaScript programming language.</p>
                        <div className="step-topics">
                            <div className="step-topic">JavaScript Fundamentals</div>
                            <div className="step-topic">DOM Manipulation</div>
                            <div className="step-topic">ES6+ Features</div>
                            <div className="step-topic">Asynchronous Programming</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">Frontend Frameworks</h2>
                    </div>
                    <div className="step-content">
                        <p>Master modern frontend frameworks.</p>
                        <div className="step-topics">
                            <div className="step-topic">React.js</div>
                            <div className="step-topic">State Management (Redux, Context)</div>
                            <div className="step-topic">Component Architecture</div>
                            <div className="step-topic">Routing and Navigation</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Backend Development</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn backend development and APIs.</p>
                        <div className="step-topics">
                            <div className="step-topic">Node.js and Express</div>
                            <div className="step-topic">RESTful APIs</div>
                            <div className="step-topic">Database Integration</div>
                            <div className="step-topic">Authentication & Authorization</div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">5</div>
                        <h2 className="step-title">Advanced Topics</h2>
                    </div>
                    <div className="step-content">
                        <p>Explore advanced web development topics.</p>
                        <div className="step-topics">
                            <div className="step-topic">Testing and Debugging</div>
                            <div className="step-topic">Performance Optimization</div>
                            <div className="step-topic">Security Best Practices</div>
                            <div className="step-topic">Deployment and DevOps</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDevelopmentRoadmap; 