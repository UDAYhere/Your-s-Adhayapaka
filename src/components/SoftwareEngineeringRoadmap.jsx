import React from 'react';
import { Link } from 'react-router-dom';
import './SoftwareEngineeringRoadmap.css';

const SoftwareEngineeringRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>Software Engineering Roadmap</h1>
                <p>Follow this comprehensive roadmap to become a professional software engineer</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">Programming Fundamentals</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the basics of programming and computer science.</p>
                        <div className="step-topics">
                            <div className="step-topic">Data structures and algorithms</div>
                            <div className="step-topic">Object-oriented programming</div>
                            <div className="step-topic">Problem-solving techniques</div>
                            <div className="step-topic">Basic computer science concepts</div>
                        </div>
                        <div className="resources">
                            <h4>Recommended Resources:</h4>
                            <a href="/notes/sub_notes/DSA.pdf" className="resource-link" target="_blank">Data Structures & Algorithms Notes</a>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">Software Development</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn software development practices and methodologies.</p>
                        <div className="step-topics">
                            <div className="step-topic">Version control (Git)</div>
                            <div className="step-topic">Software development lifecycle</div>
                            <div className="step-topic">Testing and debugging</div>
                            <div className="step-topic">Code documentation</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">System Design</h2>
                    </div>
                    <div className="step-content">
                        <p>Master system design and architecture principles.</p>
                        <div className="step-topics">
                            <div className="step-topic">System architecture patterns</div>
                            <div className="step-topic">Database design</div>
                            <div className="step-topic">API design</div>
                            <div className="step-topic">Scalability and performance</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">DevOps & Deployment</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn about deployment and DevOps practices.</p>
                        <div className="step-topics">
                            <div className="step-topic">CI/CD pipelines</div>
                            <div className="step-topic">Containerization (Docker)</div>
                            <div className="step-topic">Cloud platforms</div>
                            <div className="step-topic">Monitoring and logging</div>
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
                        <p>Explore advanced software engineering concepts.</p>
                        <div className="step-topics">
                            <div className="step-topic">Microservices architecture</div>
                            <div className="step-topic">Security best practices</div>
                            <div className="step-topic">Performance optimization</div>
                            <div className="step-topic">Software quality assurance</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareEngineeringRoadmap; 