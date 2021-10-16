import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import DesignCarousel from './components/DesignCarousel/designCarousel';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/about' component={About}/>
        <Route path='/carousel' component={DesignCarousel}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);