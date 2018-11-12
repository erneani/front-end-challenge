import React, { Component } from 'react';
import Header from './components/header/Header';
import Showcase from './sections/showcase/Showcase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Showcase />
      </div>
    );
  }
}

export default App;