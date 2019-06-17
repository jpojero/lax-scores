import React, { Component } from 'react';
import ModalDispatcher from './dispatchers/ModalDispatcher';
import { ModalLogIn } from "./components/ModalLogIn";
import './App.css';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      serverResponse : ""
    };

  }

  TestServer(){
    fetch("http://localhost:9000/testServer")
      .then(res => res.text())
      .then(res => this.setState({serverResponse: res}))
      .catch(err => err);
  }

  componentDidMount(){
    this.TestServer();
  }

  render(){
    console.log(this.state.serverResponse);
    return (
      <>
        <div className="App">
            <a className="LogIn" onClick={() => ModalDispatcher.LogInModal()}>Log In</a>
            {/* <p className="App-intro">{this.state.serverResponse}</p> */}
        </div>
        <ModalLogIn/>
      </>
    );
  }
}

export default App;
