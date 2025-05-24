import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{
    backgroundColor: '#0d0d0d',
    color: '#00ffee',
    fontFamily: 'Orbitron, sans-serif',
    textAlign: 'center',
    minHeight: '100vh',
    paddingTop: '5vh'
  }}>
    <h1 style={{ fontSize: '3rem' }}>SorcX Legacy Begins</h1>
    <img src="/bike.png" alt="Futuristic Motorcycle" style={{
      width: '90%',
      maxWidth: '600px',
      borderRadius: '20px',
      boxShadow: '0 0 20px #00ffee'
    }} />
    <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
      The world's most advanced motorcycle brand, powered by AI.
    </p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
