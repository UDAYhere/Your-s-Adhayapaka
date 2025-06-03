import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const courses = [
        {
            id: 1,
            title: 'Web Development',
            image: '/courses/web-developement.jpg',
            link: '/courses/web-development',
            description: 'Master web development with our comprehensive course covering HTML, CSS, JavaScript, and more.'
        },
        {
            id: 2,
            title: 'C++ Programming',
            image: '/courses/c++.webp',
            link: '/courses/cpp',
            description: 'Master C++ programming with comprehensive tutorials and practical examples.'
        },
        {
            id: 3,
            title: 'Java Programming',
            image: '/courses/java.jpg',
            link: '/courses/java',
            description: 'Comprehensive Java programming course covering core concepts, Spring framework, and enterprise development.'
        },
        {
            id: 4,
            title: 'Python Programming',
            image: '/courses/python-course.jpg',
            link: '/courses/python',
            description: 'Master Python programming with practical projects, data structures, and popular frameworks.'
        },
        {
            id: 5,
            title: 'React.js Development',
            image: '/courses/reactjs.png',
            link: '/courses/react',
            description: 'Learn modern UI development with React.js, including hooks, state management, and component architecture.'
        },
        {
            id: 6,
            title: 'MySQL Database',
            image: '/courses/mysql.webp',
            link: '/courses/mysql',
            description: 'Master MySQL database management, SQL queries, and database design principles.'
        },
        {
            id: 7,
            title: 'MongoDB',
            image: '/courses/mongoDB.png',
            link: '/courses/mongodb',
            description: 'Learn NoSQL database development with MongoDB, including document modeling and data operations.'
        },
        {
            id: 8,
            title: 'JavaScript Programming',
            image: '/courses/javascript.jpg',
            link: '/courses/javascript',
            description: 'Comprehensive JavaScript course covering ES6+, DOM manipulation, and modern development practices.'
        }
    ];

    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="courses-container">
            <div className="courses-header">
                <h1>Our Courses</h1>
                <div className="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {filteredCourses.length === 0 && (
                <div className="no-results">
                    <i className="fas fa-search"></i>
                    <p>No courses found matching your search.</p>
                </div>
            )}

            <div className="courses-grid">
                {filteredCourses.map(course => (
                    <div key={course.id} className="course-card">
                        <div className="course-image">
                            <img src={course.image} alt={course.title} />
                        </div>
                        <div className="course-content">
                            <h2>{course.title}</h2>
                            <Link to={course.link} className="start-learning-btn">Start Learning</Link>
                            <p>{course.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses; 