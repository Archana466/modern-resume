import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import ResumePage1 from './components/ResumePage1';
import ResumePage2 from './components/ResumePage2';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav className="nav">
          <Link to="/" className="nav-link">Page 1</Link>
          <Link to="/page2" className="nav-link">Page 2</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ResumePage1 />} />
          <Route path="/page2" element={<ResumePage2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
