import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Routing from './components/Routing';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
    <Routing />
  </Router>,
  document.getElementById('root')
);

