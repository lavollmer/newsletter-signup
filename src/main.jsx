import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThankYou from '../src/components/ThankYou';
import App from './App';
import './index.css';

// Use createRoot to mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);