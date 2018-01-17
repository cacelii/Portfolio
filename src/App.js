import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import profilePic from './images/profile-pic.jpg';
import Skills from './Skills';
import Navbar from './Navbar';
import Footer from './Footer';
import history from './history';
import Portfolio from './Portfolio';
import PhotoCarousel from './PhotoCarousel';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="content">
            <header className="App-header">
              <Navbar />
            </header>
            <Route exact path="/" component={PhotoCarousel} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
