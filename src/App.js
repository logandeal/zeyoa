import React, { Component } from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Buttons />

        <footer> Founders: Aaron Heienickle and <a href="http://www.logandeal.com">Logan Deal</a> </footer>
      </div>
    );
  }
}

export default App;