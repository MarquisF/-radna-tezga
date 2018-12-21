import React, { Component } from 'react';

import Notebook from 'Pages/Notebook';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Workbench</h1>
        <Notebook />
      </div>
    );
  }
}

export default App;
