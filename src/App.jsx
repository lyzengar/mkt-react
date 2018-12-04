import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: {},
      menu: {},
      // stands: {},
      // percussion: {},
      URL: {},
      // standsURL: {},
      // percussionURL: {}
    }
  }

  handleTaiko = () => {
    this.setState({ list: {},
                    menu: {Asano: "Asano",
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
    this.setState({ list: {},
                    menu: {Box: "Box",
                            Kato: "Kato",
                            Yatai: "Yatai",
                            Odaiko: "Odaiko",
                            Shime1: "Shime (sitting)",
                            Shime2: "Shime (standing)",
                            Okedo: "Okedo"},
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
