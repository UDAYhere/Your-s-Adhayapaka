import React from 'react';
import { Link } from 'react-router-dom';
import './DSARoadmap.css';

const DSARoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>Data Structures & Algorithms Roadmap</h1>
                <p>Follow this comprehensive roadmap to master Data Structures and Algorithms</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">Programming Basics</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the fundamentals of programming.</p>
                        <div className="step-topics">
                            <div className="step-topic">Programming logic and problem-solving</div>
                            <div className="step-topic">Time and space complexity</div>
                            <div className="step-topic">Basic programming constructs</div>
                            <div className="step-topic">Recursion</div>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">Basic Data Structures</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn fundamental data structures.</p>
                        <div className="step-topics">
                            <div className="step-topic">Arrays and Strings</div>
                            <div className="step-topic">Linked Lists</div>
                            <div className="step-topic">Stacks and Queues</div>
                            <div className="step-topic">Hash Tables</div>
                        </div>
                        <div className="resources">
                            <h4>Recommended Resources:</h4>
                            <a href="/notes/sub_notes/DSA.pdf" className="resource-link" target="_blank">Data Structures & Algorithms Notes</a>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">Advanced Data Structures</h2>
                    </div>
                    <div className="step-content">
                        <p>Master advanced data structures.</p>
                        <div className="step-topics">
                            <div className="step-topic">Trees and Graphs</div>
                            <div className="step-topic">Heaps and Priority Queues</div>
                            <div className="step-topic">Trie and Segment Trees</div>
                            <div className="step-topic">Advanced Hash Tables</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Algorithms</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn essential algorithms.</p>
                        <div className="step-topics">
                            <div className="step-topic">Sorting and Searching</div>
                            <div className="step-topic">Dynamic Programming</div>
                            <div className="step-topic">Greedy Algorithms</div>
                            <div className="step-topic">Graph Algorithms</div>
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
                        <p>Explore advanced DSA topics.</p>
                        <div className="step-topics">
                            <div className="step-topic">Advanced Graph Algorithms</div>
                            <div className="step-topic">String Algorithms</div>
                            <div className="step-topic">Computational Geometry</div>
                            <div className="step-topic">Advanced Dynamic Programming</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DSARoadmap; 