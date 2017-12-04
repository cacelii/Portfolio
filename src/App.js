import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import logo from './images/logo.jpg';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import history from './history';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Cecilia Chang</h1>
            <Navbar />
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
