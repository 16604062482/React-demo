import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home.js';
import About from '../components/About.js';

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default AppRouter;
