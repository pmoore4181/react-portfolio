import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './components/Header';

class App extends Component {
  render() {
    return (

        <div>
          <Header />
        </div>

    );
  }
}

export default App;
