import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const App = () => (
  <div className="container">
    <h1>SorcX // M-EVO : NOVA</h1>
    <p>Your bike is not just a machine. It’s a weapon. A legacy. A throne.</p>
    <img src="/nyra-bike.jpg" alt="SorcX Motorcycle" className="hero" />
    <h2>Coming 2025. Designed by AI. Built for Legends.</h2>
    <img src="/future-bike-rider.jpg" alt="Futuristic Rider" className="rider" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
