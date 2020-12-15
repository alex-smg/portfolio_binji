import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import './App.scss';

import About from './pages/about/About.js';
import Contact from './pages/contact/Contact.js';
import Projects from './pages/projects/Projects.js';
import SelectProject from './pages/selectProject/SelectProject.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';


const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: `/:id`,
    component: SelectProject
  },
  
];

export default function App() {
  return (
      <Router>
        <Header/>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        <Footer />
      </Router>
  );
}


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}