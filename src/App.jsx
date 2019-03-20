import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // list: {},
      // menu: {},
      // stands: {},
      // percussion: {},
      URL: {},
      caption: {},
      // standsURL: {},
      // percussionURL: {}
    }
  }

  handleTaiko = () => {
    this.setState({ list: {
      Asano: {
        menu: "Asano",
        caption: "A1, A2, A3",
        URL: "https://imgur.com/Ajzm4Jh.jpg"},
      SmallAsano: {
        menu: "Small Asano",
        caption: "As1, As2",
        URL: "https://imgur.com/oBr47Rn.jpg"},
      Kato: {
        menu: "Kato",
        caption: "K1, K2",
        URL: "https://imgur.com/o059u7P.jpg"},
      Heavy: {
        menu: "Heavy",
        caption: "H",
        URL: "https://imgur.com/OJZPxEP.jpg"},
      Red: {
        menu: "Red",
        caption: "Red",
        URL: "https://imgur.com/WozGHYJ.jpg"},
      BlackAndRed: {
        menu: "Black and Red",
        caption: "BR",
        URL: "https://imgur.com/pQtG99L.jpg"},
      Masala: {
        menu: "Masala",
        caption: "",
        URL: ""},
      Crestone:{
        menu: "Crestone",
        caption: "C1",
        URL: "https://imgur.com/rMDKk4x.jpg"},
      BigDana: {
        menu: "Big Dana",
        caption: "",
        URL: "https://imgur.com/BEDGpGu.jpg"},
      Odaiko: {
        menu: "Odaiko",
        caption: "",
        URL: "https://imgur.com/YONMJcc.jpg"}},
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
    this.setState({ list: {
      Box: {
        menu: "Box",
        caption: "",
        URL: ""},
      Kato: {
        menu: "Kato",
        caption: "",
        URL: ""},
      Yatai: {
        menu: "Yatai",
        caption: "",
        URL: ""},
      Odaiko: {
        menu: "Odaiko",
        caption: "",
        URL: ""},
      Shime1: {
        menu: "Shime (sitting)",
        caption: "",
        URL: ""},
    },
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

  selectPic = () => {
    this.setState({})
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
