import React from 'react';
import { Link } from 'react-router-dom';
import './JavaRoadmap.css';

const JavaRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>Java Programming Roadmap</h1>
                <p>Follow this comprehensive roadmap to master Java programming language</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">Java Basics</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the fundamentals of Java programming.</p>
                        <div className="step-topics">
                            <div className="step-topic">Introduction to Java</div>
                            <div className="step-topic">Variables and Data Types</div>
                            <div className="step-topic">Operators and Expressions</div>
                            <div className="step-topic">Control Flow Statements</div>
                        </div>
                        <div className="resources">
                            <h4>Recommended Resources:</h4>
                            <a href="/notes/sub_notes/Java.pdf" className="resource-link" target="_blank">Java Programming Notes</a>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">Object-Oriented Programming</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn Object-Oriented Programming concepts in Java.</p>
                        <div className="step-topics">
                            <div className="step-topic">Classes and Objects</div>
                            <div className="step-topic">Inheritance and Polymorphism</div>
                            <div className="step-topic">Encapsulation and Abstraction</div>
                            <div className="step-topic">Interfaces and Abstract Classes</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">Java Collections and Exception Handling</h2>
                    </div>
                    <div className="step-content">
                        <p>Master Java collections and exception handling.</p>
                        <div className="step-topics">
                            <div className="step-topic">Collection Framework</div>
                            <div className="step-topic">Lists, Sets, and Maps</div>
                            <div className="step-topic">Exception Handling</div>
                            <div className="step-topic">Custom Exceptions</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Advanced Java Concepts</h2>
                    </div>
                    <div className="step-content">
                        <p>Understand advanced Java concepts.</p>
                        <div className="step-topics">
                            <div className="step-topic">Multithreading</div>
                            <div className="step-topic">File Handling</div>
                            <div className="step-topic">Generics</div>
                            <div className="step-topic">Lambda Expressions</div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">5</div>
                        <h2 className="step-title">Java Enterprise Development</h2>
                    </div>
                    <div className="step-content">
                        <p>Explore Java enterprise development.</p>
                        <div className="step-topics">
                            <div className="step-topic">JDBC and Database Connectivity</div>
                            <div className="step-topic">Spring Framework</div>
                            <div className="step-topic">RESTful Web Services</div>
                            <div className="step-topic">Microservices Architecture</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JavaRoadmap; 