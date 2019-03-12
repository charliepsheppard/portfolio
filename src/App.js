import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'

class App extends Component {
  constructor() {
    super()
    this.appRef = React.createRef()
  }

  scroll = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    return (
      <div className="App">
        <Header appRef={this.appRef} scroll={this.scroll} />
        <Home />
        <About scroll={this.scroll} />
        <Work />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
