import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: {},
      // stands: {},
      // percussion: {},
      URL: {},
      // standsURL: {},
      // percussionURL: {}
    }
  }

  handleTaiko = () => {
    this.setState({ menu: {} })
  }

  handleStands = () => {
    this.setState({ menu: {} })
  }

  handlePercussion = () => {
    this.setState({ menu: {} })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
