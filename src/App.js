import React, { Component } from 'react';
import Header from './components/header/Header';
import Showcase from './sections/showcase/Showcase';
import Calls from './sections/calls/Calls';
import Footer from './sections/footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Showcase />
        <Calls />
        <Footer />
      </div>
    );
  }
}

export default App;