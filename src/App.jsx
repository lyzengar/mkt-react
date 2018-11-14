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
                            SmallAsano: "Small Asano",
                            Kato: "Kato",
                            Heavy: "Heavy",
                            Red: "Red",
                            BlackAndRed: "Black and Red",
                            Masala: "Masala",
                            Crestone: "Crestone",
                            BigDana: "Big Dana"},
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
    this.setState({ menu: {Tetsuzutsu: "Tetsuzutsu",
                            Kane: "Kane",
                            Chappa: "Chappa"},
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
