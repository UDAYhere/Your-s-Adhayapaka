import React from 'react';
import { Link } from 'react-router-dom';
import './PythonRoadmap.css';

const PythonRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>Python Programming Roadmap</h1>
                <p>Follow this comprehensive roadmap to master Python programming language</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">Python Basics</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the fundamentals of Python programming.</p>
                        <div className="step-topics">
                            <div className="step-topic">Introduction to Python</div>
                            <div className="step-topic">Variables and Data Types</div>
                            <div className="step-topic">Operators and Expressions</div>
                            <div className="step-topic">Control Flow Statements</div>
                        </div>
                        <div className="resources">
                            <h4>Recommended Resources:</h4>
                            <a href="/notes/sub_notes/Python.pdf" className="resource-link" target="_blank">Python Programming Notes</a>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">Data Structures and Functions</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn about Python's built-in data structures and functions.</p>
                        <div className="step-topics">
                            <div className="step-topic">Lists, Tuples, and Sets</div>
                            <div className="step-topic">Dictionaries</div>
                            <div className="step-topic">Functions and Lambda</div>
                            <div className="step-topic">Modules and Packages</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">Object-Oriented Programming</h2>
                    </div>
                    <div className="step-content">
                        <p>Master Object-Oriented Programming in Python.</p>
                        <div className="step-topics">
                            <div className="step-topic">Classes and Objects</div>
                            <div className="step-topic">Inheritance and Polymorphism</div>
                            <div className="step-topic">Encapsulation</div>
                            <div className="step-topic">Magic Methods</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Advanced Python Concepts</h2>
                    </div>
                    <div className="step-content">
                        <p>Explore advanced Python concepts and features.</p>
                        <div className="step-topics">
                            <div className="step-topic">Decorators and Generators</div>
                            <div className="step-topic">Context Managers</div>
                            <div className="step-topic">Exception Handling</div>
                            <div className="step-topic">File Handling</div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">5</div>
                        <h2 className="step-title">Python Applications</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn about Python's applications in different domains.</p>
                        <div className="step-topics">
                            <div className="step-topic">Web Development (Django/Flask)</div>
                            <div className="step-topic">Data Science and Machine Learning</div>
                            <div className="step-topic">Automation and Scripting</div>
                            <div className="step-topic">Game Development</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonRoadmap; 