import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      URL: "https://imgur.com/qiGEPiH.jpg",
      caption: "",
      list: [
        {menu: "Asano", caption: "A1, A2, A3", URL: "https://imgur.com/Ajzm4Jh.jpg"},
        {menu: "Small Asano", caption: "As1, As2", URL: "https://imgur.com/oBr47Rn.jpg"},
        {menu: "Kato", caption: "K1, K2", URL: "https://imgur.com/o059u7P.jpg"},
        {menu: "Heavy", caption: "H", URL: "https://imgur.com/OJZPxEP.jpg"},
        {menu: "Red", caption: "Red", URL: "https://imgur.com/WozGHYJ.jpg"},
        {menu: "Black and Red", caption: "BR", URL: "https://imgur.com/pQtG99L.jpg"},
        {menu: "Crestone 1", caption: "C1", URL: "https://imgur.com/rMDKk4x.jpg"},
        {menu: "Crestone 2", caption: "C2", URL: "https://imgur.com/R0z9RgX.jpg"},
        {menu: "Crestone 3", caption: "C3", URL: "https://imgur.com/RFkynuP.jpg"},
        {menu: "Big Dana", caption: "", URL: "https://imgur.com/BEDGpGu.jpg"},
        {menu: "Masala", caption: "", URL: "https://imgur.com/HqGtMdG.jpg"},
        {menu: "Shime", caption: "San-cho 2x, Regular 4x", URL: "https://imgur.com/tW2lxfH.jpg"},
        {menu: "Odaiko", caption: "w/ stand", URL: "https://imgur.com/YONMJcc.jpg"},
        {menu: "Okedo", caption: "", URL: "https://imgur.com/lMCiHaK.jpg"}
      ]
    }
  }

  handleTaiko = () => {
    this.setState({ list: [
      {menu: "Asano", caption: "A1, A2, A3", URL: "https://imgur.com/Ajzm4Jh.jpg"},
      {menu: "Small Asano", caption: "As1, As2", URL: "https://imgur.com/oBr47Rn.jpg"},
      {menu: "Kato", caption: "K1, K2", URL: "https://imgur.com/o059u7P.jpg"},
      {menu: "Heavy", caption: "H", URL: "https://imgur.com/OJZPxEP.jpg"},
      {menu: "Red", caption: "Red", URL: "https://imgur.com/WozGHYJ.jpg"},
      {menu: "Black and Red", caption: "BR", URL: "https://imgur.com/pQtG99L.jpg"},
      {menu: "Crestone", caption: "C1", URL: "https://imgur.com/rMDKk4x.jpg"},
      {menu: "Big Dana", caption: "", URL: "https://imgur.com/BEDGpGu.jpg"},
      {menu: "Masala", caption: "", URL: "https://imgur.com/HqGtMdG.jpg"},
      {menu: "Shime", caption: "", URL: "https://imgur.com/tW2lxfH.jpg"},
      {menu: "Odaiko", caption: "", URL: "https://imgur.com/YONMJcc.jpg"},
      {menu: "Okedo", caption: "", URL: "https://imgur.com/lMCiHaK.jpg"},
      {menu: "Big Dana", caption: "", URL: ""}
      {menu: "Hira", caption: "", URL: ""}
    ]
    })
  }

  handleStands = () => {
    this.setState({
      list : [
        {menu: "Box Stand", caption: "", URL: "https://imgur.com/UbLw9dU.jpg"},
        {menu: "Kato Stand", caption: "", URL: "https://imgur.com/u6Mstzr.jpg"},
        {menu: "Yatai Stand (Asano)", caption: "", URL: "https://imgur.com/mwvfEdc.jpg"},
        {menu: "Yatai Stand (black)", caption: "", URL: "https://imgur.com/OMGqRZu.jpg"},
        {menu: "Hachijo Stand", caption: "", URL: "https://imgur.com/tJEJErD.jpg"},
        {menu: "High Stand", caption: "", URL: "https://imgur.com/EcFS4Oq.jpg"},
        {menu: "Odaiko Stand (beta)", caption: "", URL: "https://imgur.com/HEiEAyQ.jpg"},
        {menu: "Shime Stand (sitting)", caption: "", URL: "https://imgur.com/WqmRzzv.jpg"},
        {menu: "Shime Stand (standing)", caption: "", URL: "https://imgur.com/oi5O7zW.jpg"},
        {menu: "Okedo Stand", caption: "", URL: "https://imgur.com/mODhyVr.jpg"},
      ]
    })
  }

  handlePercussion = () => {
    this.setState({
      list: [
        {menu: "Tetsuzutsu", caption: "Tetsuzutsu (cannon)", URL: "https://imgur.com/atpRlwT.jpg"},
        {menu: "Kane", caption: "", URL: "https://imgur.com/KCeNuGs.jpg"},
        // {menu: "Chappa", caption: "", URL: ""},
      ]
    })
  }

  selectPic = (e) => {
    this.setState({ URL: e.target.value, caption: e.target.getAttribute('data-value') })
  }

  render() {
    return (
      <div className="App">
        <NavBar
            handleTaiko={this.handleTaiko}
            handleStands={this.handleStands}
            handlePercussion={this.handlePercussion}
        />
        <Main
          selectPic={this.selectPic}
          URL={this.state.URL}
          caption={this.state.caption}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
