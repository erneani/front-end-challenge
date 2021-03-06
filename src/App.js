import React, { Component } from 'react';
import Header from './components/header/Header';
import Showcase from './sections/showcase/Showcase';
import Calls from './sections/calls/Calls';
import { Versions } from './sections/versions/Versions';
import { Vehicles } from './sections/vehicles/Vehicles';
import Footer from './sections/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Showcase />
        <Calls />
        <Versions />
        <Vehicles />
        <Footer />
      </div>
    );
  }
}

export default App;