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
    this.setState({ list: {
      Asano: {
        menu: "Asano",
        caption: "A1, A2, A3",
        URL: ""},
      SmallAsano: {
        menu: "Small Asano",
        caption: "As1, As2",
        URL: ""},
      Kato: {
        menu: "Kato",
        caption: "K1, K2",
        URL: ""},
      Heavy: {
        menu: "Heavy",
        caption: "H",
        URL: ""},
      Red: {
        menu: "Red",
        caption: "",
        URL: ""},
      BlackAndRed: {
        menu: "Black and Red",
        caption: "",
        URL: ""},
      Masala: {
        menu: "Masala",
        caption: "",
        URL: ""},
      Crestone:{
        menu: "Crestone",
        caption: "",
        URL: ""},
      BigDana: {
        menu: "Big Dana",
        caption: "",
        URL: ""},
      Odaiko: {
        menu: "Odaiko",
        caption: "",
        URL: ""}},
                    // menu: {Asano: "Asano",
                    //         SmallAsano: "Small Asano",
                    //         Kato: "Kato",
                    //         Heavy: "Heavy",
                    //         Red: "Red",
                    //         BlackAndRed: "Black and Red",
                    //         Masala: "Masala",
                    //         Crestone: "Crestone",
                    //         BigDana: "Big Dana"},
                    // URL: {} 
                  })
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
    this.setState({ list: {},
                    menu: {Tetsuzutsu: "Tetsuzutsu",
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
