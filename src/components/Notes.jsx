import React from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

const programmingNotes = [
    {
        title: "Android Development",
        description: "Comprehensive notes covering Android app development fundamentals, UI components, and best practices.",
        logo: "/logo/android.png",
        downloadLink: "/notes/sub_notes/Android.pdf"
    },
    {
        title: "C Programming",
        description: "Complete C programming notes including syntax, data structures, and programming concepts.",
        logo: "/logo/c.webp",
        downloadLink: "/notes/sub_notes/C.pdf"
    },
    {
        title: "CSS",
        description: "Detailed CSS notes covering selectors, properties, layouts, and responsive design.",
        logo: "/logo/css.png",
        downloadLink: "/notes/sub_notes/CSS.pdf"
    },
    {
        title: "Data Structures & Algorithms",
        description: "Comprehensive DSA notes including arrays, linked lists, trees, graphs, and sorting algorithms.",
        logo: "/logo/DSA.webp",
        downloadLink: "/notes/sub_notes/DSA.pdf"
    },
    {
        title: "HTML",
        description: "Complete HTML notes covering tags, elements, forms, and semantic HTML5 features.",
        logo: "/logo/html.webp",
        downloadLink: "/notes/sub_notes/HTML.pdf"
    },
    {
        title: "Java",
        description: "Detailed Java programming notes including OOP concepts, collections, and advanced features.",
        logo: "/logo/java.png",
        downloadLink: "/notes/sub_notes/Java.pdf"
    },
    {
        title: "JavaScript",
        description: "Complete JavaScript notes covering ES6+, DOM manipulation, and modern web development.",
        logo: "/logo/js.webp",
        downloadLink: "/notes/sub_notes/JS.pdf"
    },
    {
        title: "Python",
        description: "Comprehensive Python notes including syntax, libraries, and practical programming examples.",
        logo: "/logo/python.jpg",
        downloadLink: "/notes/sub_notes/Python.pdf"
    }
];

const handbooks = [
    {
        title: "C Programming Handbook",
        description: "Complete handbook covering C programming from basics to advanced concepts, with practical examples and exercises.",
        logo: "/logo/c.webp",
        downloadLink: "/notes/handbook/The Ultimate C Handbook.pdf",
        isHandbook: true
    },
    {
        title: "HTML Handbook",
        description: "Comprehensive HTML handbook including all HTML5 elements, attributes, forms, and best practices for web development.",
        logo: "/logo/html.webp",
        downloadLink: "/notes/handbook/The Ultimate HTML handbook.pdf",
        isHandbook: true
    },
    {
        title: "Python Handbook",
        description: "Complete Python handbook covering syntax, data structures, OOP, libraries, and practical programming examples.",
        logo: "/logo/python.jpg",
        downloadLink: "/notes/handbook/The Ultimate Python Handbook.pdf",
        isHandbook: true
    }
];

const Notes = () => {
    return (
        <div className="notes-page">
            <section className="notes-section">
                <h2>Programming Notes</h2>
                <div className="notes-grid">
                    {programmingNotes.map((note, index) => (
                        <div className="note-card" key={index}>
                            <div className="note-header">
                                <div className="note-logo">
                                    <img src={note.logo} alt={`${note.title} Logo`} />
                                </div>
                                <h3 className="note-title">{note.title}</h3>
                            </div>
                            <div className="note-content">
                                <p className="note-description">{note.description}</p>
                                <a href={note.downloadLink} className="download-btn" download>
                                    <i className="fas fa-download"></i> Download Notes
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="notes-section handbook-section">
                <h2>Programming Handbooks</h2>
                <div className="notes-grid">
                    {handbooks.map((handbook, index) => (
                        <div className="note-card" key={index}>
                            <div className="note-header">
                                <div className="note-logo">
                                    <img src={handbook.logo} alt={`${handbook.title} Logo`} />
                                </div>
                                <h3 className="note-title">{handbook.title}</h3>
                            </div>
                            <div className="note-content">
                                <p className="note-description">{handbook.description}</p>
                                <a href={handbook.downloadLink} className="download-btn" download>
                                    <i className="fas fa-download"></i> Download Handbook
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Notes; 