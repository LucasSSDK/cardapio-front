import Footer  from 'components/Footer/Footer.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home/index.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Home />
  <Footer />

  </React.StrictMode>,
);
