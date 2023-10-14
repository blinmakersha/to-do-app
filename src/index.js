import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screen/Home/Home';
import Layout from './components/layout/Layout';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);


reportWebVitals();
