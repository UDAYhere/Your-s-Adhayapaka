import React from 'react';
import { Link } from 'react-router-dom';
import './CRoadmap.css';

const CRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>C Programming Roadmap</h1>
                <p>Follow this comprehensive roadmap to master C programming language</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">C Basics</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the fundamentals of C programming.</p>
                        <div className="step-topics">
                            <div className="step-topic">Introduction to C</div>
                            <div className="step-topic">Variables and Data Types</div>
                            <div className="step-topic">Operators and Expressions</div>
                            <div className="step-topic">Input/Output Functions</div>
                        </div>
                        <div className="resources">
                            <h4>Recommended Resources:</h4>
                            <a href="/notes/sub_notes/C.pdf" className="resource-link" target="_blank">C Programming Notes</a>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">Control Structures</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn about control flow in C.</p>
                        <div className="step-topics">
                            <div className="step-topic">Conditional Statements (if, else, switch)</div>
                            <div className="step-topic">Loops (for, while, do-while)</div>
                            <div className="step-topic">Break and Continue</div>
                            <div className="step-topic">Nested Control Structures</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">Functions and Arrays</h2>
                    </div>
                    <div className="step-content">
                        <p>Master functions and arrays in C.</p>
                        <div className="step-topics">
                            <div className="step-topic">Function Declaration and Definition</div>
                            <div className="step-topic">Function Parameters and Return Types</div>
                            <div className="step-topic">One-dimensional and Multi-dimensional Arrays</div>
                            <div className="step-topic">String Handling</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Pointers and Memory Management</h2>
                    </div>
                    <div className="step-content">
                        <p>Understand pointers and memory management.</p>
                        <div className="step-topics">
                            <div className="step-topic">Pointer Basics</div>
                            <div className="step-topic">Pointer Arithmetic</div>
                            <div className="step-topic">Dynamic Memory Allocation</div>
                            <div className="step-topic">Memory Leaks and Management</div>
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
                        <p>Explore advanced C programming concepts.</p>
                        <div className="step-topics">
                            <div className="step-topic">Structures and Unions</div>
                            <div className="step-topic">File Handling</div>
                            <div className="step-topic">Preprocessor Directives</div>
                            <div className="step-topic">Command Line Arguments</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CRoadmap; 