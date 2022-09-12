import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <App />
        </Layout>
      </Router>
  </React.StrictMode>
);

reportWebVitals();