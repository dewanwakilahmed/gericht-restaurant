import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

// MAIN APP
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
