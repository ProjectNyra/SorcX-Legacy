import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const App = () => (
  <div className="container">
    <h1>Welcome to SorcX</h1>
    <p className="tagline">Where Machines Bow to Vision</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
