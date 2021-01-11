import React from "react";

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";


import './App.scss';

import About from './pages/about/About.js';
import Contact from './pages/contact/Contact.js';
import Projects from './pages/projects/Projects.js';
import SelectProject from './pages/selectProject/SelectProject.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';


const routes = [
  {
    path: "/",
    component: About,
  },
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
          <AninationApp />
        <Footer />
      </Router>
  );
}

function AninationApp() {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="my-node" timeout={300}>
        <Switch location={location}>
          {routes.map((route, i) => (
            <Route exact key={i} {...route} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}
