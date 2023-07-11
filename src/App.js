import React, { Component } from 'react';
import PrikazPoruka from "./Komponente/PrikazPoruka";
import Unos from './Komponente/Unos';
import './App.css';

function imeKorisnika() {
  const imena = ["Ivana", "Ana", "Nikolina", "Karla"];
  const prezimena = ["Bilić", "Perić", "Marić", "Tokić"];

  return imena[Math.floor(Math.random() * imena.length)] + " " + prezimena[Math.floor(Math.random() * prezimena.length)];
}

class App extends Component {
  state = {
    messages: [],
    member: {
      imeKorisnika: imeKorisnika(),
    }

  };

  pozivScaledrone() {
    this.drone = new window.Scaledrone("XdKOdsoSrBCL9tp3", {
      data: this.state.member
    });

    this.drone.on('open', error => {
      if (!error) {
        this.currentMemberID = this.drone.clientId;
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    const room = this.drone.subscribe("observable-room");

    room.on('data', (data, member) => {
      const mcopy = this.state.messages;
      mcopy.push({ member, text: data });
      this.setState({ mcopy });
    });
  }

  componentDidMount() {
    this.pozivScaledrone();
  }

  render() {

    return (
      <div className="App">
        <PrikazPoruka korisnik={this.state.member} poruke={this.state.messages} />
        <Unos saljiPoruku={this.saljiPoruku} />
      </div>
    )
  }
  saljiPoruku = (message) => {
    this.drone.publish(
      {
        room: "observable-room",
        message
      }
    )
  };

}

export default App;