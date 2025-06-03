import React from 'react';
import './Mentors.css';

const mentors = [
    {
        name: "Uday Kumar",
        title: "Senior Software Engineer",
        expertise: "Expert in Python, JavaScript, and Cloud Computing",
        linkedin: "https://www.linkedin.com/in/uday-here/",
        instagram: "https://www.instagram.com/uday.here_/",
        image: "/mentors/1.jpg"
    },
    {
        name: "Harsh Jaiswal",
        title: "Full Stack Developer",
        expertise: "Specialized in React, Node.js, and Database Design",
        linkedin: "https://www.linkedin.com/in/harsh-kumar-010690228/",
        instagram: "https://www.instagram.com/__being_harsh/",
        image: "/mentors/h.png"
    },
    {
        name: "Priyanka Mahto",
        title: "Data Science Expert",
        expertise: "Master in Machine Learning, Data Analysis, and AI",
        linkedin: "https://www.linkedin.com/in/priyanka-mahto-mca/",
        instagram: "https://www.instagram.com/love._myself._selflove/",
        image: "/mentors/p.png"
    },
    {
        name: "Ritik Chauhan",
        title: "UI/UX Designer",
        expertise: "Expert in User Interface Design and User Experience",
        linkedin: "https://www.linkedin.com/in/ritikch070/",
        instagram: "https://www.instagram.com/ritik_chauhan123/",
        image: "/mentors/r.png"
    }
];

const Mentors = () => {
    return (
        <section className="mentors">
            <h2>Our Expert Mentors</h2>
            <div className="mentor-cards">
                {mentors.map((mentor, index) => (
                    <div className="mentor-card" key={index}>
                        <div className="mentor-image">
                            <img src={mentor.image} alt={mentor.name} />
                        </div>
                        <div className="mentor-info">
                            <h3>{mentor.name}</h3>
                            <p className="mentor-title">{mentor.title}</p>
                            <p className="mentor-expertise">{mentor.expertise}</p>
                            <div className="mentor-social">
                                <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href={mentor.instagram} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Mentors; 