import React from 'react';
import { Link } from 'react-router-dom';
import './ReactRoadmap.css';

const ReactRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>React Roadmap</h1>
                <p>Follow this comprehensive roadmap to become a React expert</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">React Fundamentals</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the basics of React development.</p>
                        <div className="step-topics">
                            <div className="step-topic">Components and JSX</div>
                            <div className="step-topic">Props and State</div>
                            <div className="step-topic">Lifecycle Methods</div>
                            <div className="step-topic">Event Handling</div>
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
                        <h2 className="step-title">React Hooks</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn modern React hooks and functional components.</p>
                        <div className="step-topics">
                            <div className="step-topic">useState and useEffect</div>
                            <div className="step-topic">useContext and useReducer</div>
                            <div className="step-topic">Custom Hooks</div>
                            <div className="step-topic">useRef and useMemo</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">State Management</h2>
                    </div>
                    <div className="step-content">
                        <p>Master state management in React applications.</p>
                        <div className="step-topics">
                            <div className="step-topic">Context API</div>
                            <div className="step-topic">Redux Toolkit</div>
                            <div className="step-topic">MobX</div>
                            <div className="step-topic">Zustand</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Advanced React</h2>
                    </div>
                    <div className="step-content">
                        <p>Explore advanced React concepts and patterns.</p>
                        <div className="step-topics">
                            <div className="step-topic">React Router</div>
                            <div className="step-topic">Server-Side Rendering</div>
                            <div className="step-topic">Code Splitting</div>
                            <div className="step-topic">Performance Optimization</div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">5</div>
                        <h2 className="step-title">React Ecosystem</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn about the React ecosystem and tools.</p>
                        <div className="step-topics">
                            <div className="step-topic">Testing (Jest, React Testing Library)</div>
                            <div className="step-topic">Build Tools (Webpack, Vite)</div>
                            <div className="step-topic">TypeScript with React</div>
                            <div className="step-topic">React Native Basics</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactRoadmap; 