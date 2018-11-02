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
    this.setState({ menu: {Asano: "Asano",
                            Kato: "Kato",
                            Heavy: "Heavy",
                            Red: "Red",
                            BlackAndRed: "Black and Red"},
                    URL: {} })
  }

  handleStands = () => {
    this.setState({ menu: {Box: "Box",
                            Kato: "Kato",
                            Yatai: "Yatai",
                            Odaiko: "Odaiko",
                            Shime: "Shime"},
                    URL: {} })
  }

  handlePercussion = () => {
    this.setState({ menu: {},
                    URL: {} })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
