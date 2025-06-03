import React from 'react';
import { Link } from 'react-router-dom';
import './MongoDBRoadmap.css';

const MongoDBRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>MongoDB Roadmap</h1>
                <p>Follow this comprehensive roadmap to become a MongoDB expert</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">MongoDB Fundamentals</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the basics of MongoDB and NoSQL databases.</p>
                        <div className="step-topics">
                            <div className="step-topic">Introduction to NoSQL and MongoDB</div>
                            <div className="step-topic">Document Data Model</div>
                            <div className="step-topic">MongoDB Installation and Setup</div>
                            <div className="step-topic">Basic CRUD Operations</div>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">Querying and Indexing</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn advanced querying techniques and performance optimization.</p>
                        <div className="step-topics">
                            <div className="step-topic">Advanced Query Operators</div>
                            <div className="step-topic">Indexing Strategies</div>
                            <div className="step-topic">Query Optimization</div>
                            <div className="step-topic">Aggregation Pipeline</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">Data Modeling</h2>
                    </div>
                    <div className="step-content">
                        <p>Master MongoDB data modeling techniques.</p>
                        <div className="step-topics">
                            <div className="step-topic">Document Design</div>
                            <div className="step-topic">Relationships and References</div>
                            <div className="step-topic">Schema Design Patterns</div>
                            <div className="step-topic">Data Validation</div>
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
                        <p>Explore advanced MongoDB features and capabilities.</p>
                        <div className="step-topics">
                            <div className="step-topic">Replication</div>
                            <div className="step-topic">Sharding</div>
                            <div className="step-topic">Transactions</div>
                            <div className="step-topic">Security Features</div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">5</div>
                        <h2 className="step-title">Integration and Tools</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn to integrate MongoDB with applications and use development tools.</p>
                        <div className="step-topics">
                            <div className="step-topic">MongoDB Atlas</div>
                            <div className="step-topic">Driver Integration</div>
                            <div className="step-topic">Monitoring Tools</div>
                            <div className="step-topic">Backup and Recovery</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MongoDBRoadmap; 