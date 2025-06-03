import React from 'react';
import { Link } from 'react-router-dom';
import './DevOpsRoadmap.css';

const DevOpsRoadmap = () => {
    return (
        <div className="roadmap-container">
            <div className="roadmap-header">
                <h1>DevOps Roadmap</h1>
                <p>Follow this comprehensive roadmap to become a DevOps expert</p>
            </div>

            <div className="roadmap-steps">
                {/* Step 1 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <h2 className="step-title">Linux & Scripting</h2>
                    </div>
                    <div className="step-content">
                        <p>Start with the fundamentals of Linux and scripting.</p>
                        <div className="step-topics">
                            <div className="step-topic">Linux Fundamentals</div>
                            <div className="step-topic">Shell Scripting (Bash)</div>
                            <div className="step-topic">System Administration</div>
                            <div className="step-topic">Networking Basics</div>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <h2 className="step-title">Version Control & CI/CD</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn version control and continuous integration/deployment.</p>
                        <div className="step-topics">
                            <div className="step-topic">Git & GitHub</div>
                            <div className="step-topic">Jenkins</div>
                            <div className="step-topic">GitLab CI/CD</div>
                            <div className="step-topic">GitHub Actions</div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <h2 className="step-title">Containerization & Orchestration</h2>
                    </div>
                    <div className="step-content">
                        <p>Master containerization and orchestration tools.</p>
                        <div className="step-topics">
                            <div className="step-topic">Docker</div>
                            <div className="step-topic">Kubernetes</div>
                            <div className="step-topic">Container Security</div>
                            <div className="step-topic">Service Mesh</div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <h2 className="step-title">Infrastructure as Code</h2>
                    </div>
                    <div className="step-content">
                        <p>Learn infrastructure automation and configuration management.</p>
                        <div className="step-topics">
                            <div className="step-topic">Terraform</div>
                            <div className="step-topic">Ansible</div>
                            <div className="step-topic">Cloud Platforms (AWS, Azure, GCP)</div>
                            <div className="step-topic">Configuration Management</div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="roadmap-step">
                    <div className="step-header">
                        <div className="step-number">5</div>
                        <h2 className="step-title">Monitoring & Logging</h2>
                    </div>
                    <div className="step-content">
                        <p>Master monitoring, logging, and observability tools.</p>
                        <div className="step-topics">
                            <div className="step-topic">Prometheus & Grafana</div>
                            <div className="step-topic">ELK Stack</div>
                            <div className="step-topic">APM Tools</div>
                            <div className="step-topic">Alerting Systems</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevOpsRoadmap; 