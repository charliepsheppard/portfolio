import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import Resume from './components/Resume/Resume'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route 
            exact path='/' 
            component={Home}
          />
          <Route 
            exact path='/about' 
            component={About}
          />
          <Route 
            path='/work'
            component={Work}
          />
          <Route 
            path='/resume'
            component={Resume}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
