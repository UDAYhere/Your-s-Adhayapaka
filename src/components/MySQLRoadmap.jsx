import React from 'react';
import { Link } from 'react-router-dom';
import './MySQLRoadmap.css';

const MySQLRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>MySQL Roadmap</h1>
                <p>Follow this comprehensive roadmap to become a MySQL expert</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">MySQL Fundamentals</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the basics of MySQL and relational databases.</p>
                        <div className="step-topics">
                            <div className="step-topic">Introduction to RDBMS and MySQL</div>
                            <div className="step-topic">MySQL Installation and Configuration</div>
                            <div className="step-topic">Basic SQL Commands</div>
                            <div className="step-topic">Database and Table Management</div>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">SQL Querying</h2>
                    </div>
                    <div className="step-content">
                        <p>Master SQL querying and data manipulation.</p>
                        <div className="step-topics">
                            <div className="step-topic">SELECT Statements</div>
                            <div className="step-topic">JOIN Operations</div>
                            <div className="step-topic">Subqueries</div>
                            <div className="step-topic">Aggregate Functions</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">Database Design</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn database design principles and optimization.</p>
                        <div className="step-topics">
                            <div className="step-topic">Normalization</div>
                            <div className="step-topic">Indexing</div>
                            <div className="step-topic">Constraints</div>
                            <div className="step-topic">Performance Tuning</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Advanced Features</h2>
                    </div>
                    <div className="step-content">
                        <p>Explore advanced MySQL features and capabilities.</p>
                        <div className="step-topics">
                            <div className="step-topic">Stored Procedures</div>
                            <div className="step-topic">Triggers</div>
                            <div className="step-topic">Views</div>
                            <div className="step-topic">Transactions</div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">5</div>
                        <h2 className="step-title">Administration and Security</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn MySQL administration and security best practices.</p>
                        <div className="step-topics">
                            <div className="step-topic">User Management</div>
                            <div className="step-topic">Backup and Recovery</div>
                            <div className="step-topic">Replication</div>
                            <div className="step-topic">Security Best Practices</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySQLRoadmap; 