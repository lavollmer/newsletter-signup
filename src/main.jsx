import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThankYou from '../src/components/ThankYou';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* parent component to route */}
    <BrowserRouter>
    {/* define navigation paths within a SPA */}
      <Routes>
        {/* checks the current URL and displays the component associated with that exact path */}
        <Route path="/" element={<App />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);