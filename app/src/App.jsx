import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      serverResponse : ""
    };

  }

  callServer(){
    fetch("http://localhost:9000/testServer")
      .then(res => res.text())
      .then(res => this.setState({serverResponse: res}))
      .catch(err => err);
  }

  componentDidMount(){
    this.callServer();
  }

  render(){
    console.log(this.state.serverResponse);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {/* <p className="App-intro">{this.state.serverResponse}</p> */}
      </div>
    );
  }
}

export default App;
