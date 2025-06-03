import React from 'react';
import './JavaScriptRoadmap.css';

const JavaScriptRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>JavaScript Roadmap</h1>
                <p>Follow this comprehensive roadmap to become a JavaScript expert</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">JavaScript Basics</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the fundamentals of JavaScript programming.</p>
                        <div className="step-topics">
                            <div className="step-topic">Variables and Data Types</div>
                            <div className="step-topic">Operators and Expressions</div>
                            <div className="step-topic">Control Flow (if/else, loops)</div>
                            <div className="step-topic">Functions and Scope</div>
                        </div>
                        <div className="resources">
                            <h4>Recommended Resources</h4>
                            <a href="/notes/sub_notes/JS.pdf" className="resource-link" target="_blank">JavaScript Programming Notes</a>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">Object-Oriented JavaScript</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn object-oriented programming concepts in JavaScript.</p>
                        <div className="step-topics">
                            <div className="step-topic">Objects and Prototypes</div>
                            <div className="step-topic">Classes and Inheritance</div>
                            <div className="step-topic">Modules and Namespaces</div>
                            <div className="step-topic">Design Patterns</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">DOM Manipulation</h2>
                    </div>
                    <div className="step-content">
                        <p>Master Document Object Model manipulation and events.</p>
                        <div className="step-topics">
                            <div className="step-topic">DOM Selection and Traversal</div>
                            <div className="step-topic">Event Handling</div>
                            <div className="step-topic">DOM Manipulation Methods</div>
                            <div className="step-topic">Form Handling</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Modern JavaScript</h2>
                    </div>
                    <div className="step-content">
                        <p>Explore modern JavaScript features and best practices.</p>
                        <div className="step-topics">
                            <div className="step-topic">ES6+ Features</div>
                            <div className="step-topic">Async/Await and Promises</div>
                            <div className="step-topic">Modules and Imports</div>
                            <div className="step-topic">Error Handling</div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">5</div>
                        <h2 className="step-title">Advanced Concepts</h2>
                    </div>
                    <div className="step-content">
                        <p>Dive into advanced JavaScript concepts and tools.</p>
                        <div className="step-topics">
                            <div className="step-topic">Closures and Memory Management</div>
                            <div className="step-topic">Functional Programming</div>
                            <div className="step-topic">Testing and Debugging</div>
                            <div className="step-topic">Performance Optimization</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JavaScriptRoadmap; 