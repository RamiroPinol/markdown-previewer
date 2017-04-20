import React, { Component } from 'react';
import Header from './components/Header';
import MainDiv from './components/MainDiv';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainDiv />
        <Footer />
      </div>
    );
  }
}

export default App;
