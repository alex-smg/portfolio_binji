import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';

import About from './pages/about/About.js';
import Contact from './pages/contact/Contact.js';
import Projects from './pages/projects/Projects.js';
import Home from './pages/home/Home.js';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
    </Router>
  );
}
