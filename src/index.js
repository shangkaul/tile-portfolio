import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DesignCarousel from './components/DesignCarousel/designCarousel';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/work' component={Projects} />
        <Route path='/skills' component={About} />
        <Route path='/gallery' component={DesignCarousel} />
        <Route path='/blog' component={About} />
        <Route path='/achievements' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/carousel' component={DesignCarousel} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);