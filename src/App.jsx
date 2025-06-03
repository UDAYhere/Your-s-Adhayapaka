import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Mentors from './components/Mentors';
import Courses from './components/Courses';
import Notes from './components/Notes';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Roadmaps from './components/Roadmaps';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AndroidRoadmap from './components/AndroidRoadmap';
import CRoadmap from './components/CRoadmap';
import DevOpsRoadmap from './components/DevOpsRoadmap';
import DSARoadmap from './components/DSARoadmap';
import JavaRoadmap from './components/JavaRoadmap';
import JavaScriptRoadmap from './components/JavaScriptRoadmap';
import ReactRoadmap from './components/ReactRoadmap';
import WebDevCourse from './components/WebDevCourse';
import PythonCourse from './components/PythonCourse';
import JavaCourse from './components/JavaCourse';
import CPPCourse from './components/CPPCourse';
import MongoDBCourse from './components/MongoDBCourse';
import WebDevelopmentRoadmap from './components/WebDevelopmentRoadmap';
import SoftwareEngineeringRoadmap from './components/SoftwareEngineeringRoadmap';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Mentors />
                <Courses />
              </>
            } />
            <Route path="/notes" element={<Notes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/roadmaps/android" element={<AndroidRoadmap />} />
            <Route path="/roadmaps/c" element={<CRoadmap />} />
            <Route path="/roadmaps/devops" element={<DevOpsRoadmap />} />
            <Route path="/roadmaps/java" element={<JavaRoadmap />} />
            <Route path="/roadmaps/dsa" element={<DSARoadmap />} />
            <Route path="/roadmaps/javascript" element={<JavaScriptRoadmap />} />
            <Route path="/roadmaps/react" element={<ReactRoadmap />} />
            <Route path="/roadmaps/software-engineering" element={<SoftwareEngineeringRoadmap />} />
            <Route path="/roadmaps/web-development" element={<WebDevelopmentRoadmap />} />
            {/* Course Routes */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/web-development" element={<WebDevCourse />} />
            <Route path="/courses/python" element={<PythonCourse />} />
            <Route path="/courses/java" element={<JavaCourse />} />
            <Route path="/courses/cpp" element={<CPPCourse />} />
            <Route path="/courses/mongodb" element={<MongoDBCourse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 