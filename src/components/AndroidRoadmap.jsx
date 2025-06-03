import React from 'react';
import { Link } from 'react-router-dom';
import './AndroidRoadmap.css';

const AndroidRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>Android Development Roadmap</h1>
                <p>Follow this comprehensive roadmap to become a professional Android developer</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">Java/Kotlin Fundamentals</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the programming languages used in Android development.</p>
                        <div className="step-topics">
                            <div className="step-topic">Java/Kotlin syntax and basics</div>
                            <div className="step-topic">Object-oriented programming</div>
                            <div className="step-topic">Data structures and algorithms</div>
                            <div className="step-topic">Memory management</div>
                        </div>
                        <div className="resources">
                            <h4>Recommended Resources:</h4>
                            <a href="/notes/sub_notes/Java.pdf" className="resource-link" target="_blank">Java Notes</a>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">Android Basics</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn the fundamentals of Android development.</p>
                        <div className="step-topics">
                            <div className="step-topic">Android Studio setup</div>
                            <div className="step-topic">Activities and Fragments</div>
                            <div className="step-topic">User Interface design</div>
                            <div className="step-topic">Layouts and Views</div>
                        </div>
                        <div className="resources">
                            <h4>Recommended Resources:</h4>
                            <a href="/notes/sub_notes/Android.pdf" className="resource-link" target="_blank">Android Notes</a>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">Advanced Android Concepts</h2>
                    </div>
                    <div className="step-content">
                        <p>Master advanced Android development concepts.</p>
                        <div className="step-topics">
                            <div className="step-topic">Material Design</div>
                            <div className="step-topic">RecyclerView and Adapters</div>
                            <div className="step-topic">Networking and APIs</div>
                            <div className="step-topic">Background processing</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Data Management</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn about data storage and management in Android.</p>
                        <div className="step-topics">
                            <div className="step-topic">Room Database</div>
                            <div className="step-topic">Shared Preferences</div>
                            <div className="step-topic">File Storage</div>
                            <div className="step-topic">Content Providers</div>
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
                        <p>Explore advanced Android development topics.</p>
                        <div className="step-topics">
                            <div className="step-topic">Dependency Injection</div>
                            <div className="step-topic">MVVM Architecture</div>
                            <div className="step-topic">Testing and Debugging</div>
                            <div className="step-topic">Performance Optimization</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AndroidRoadmap; 