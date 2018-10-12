import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taiko: {},
      stands: {},
      percussion: {},
      taikoURL: {},
      standsURL: {},
      percussionURL: {}
    }
  }

  handleTaiko = () => {
    this.setState({ taiko: {} })
  }

  handleStands = () => {
    this.setState({ stands: {} })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
