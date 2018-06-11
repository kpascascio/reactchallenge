import React, { Component } from 'react';
import './App.css';
import Signup from './Signup'; 
import Login from './Login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false
    }
  }

  changeUserStatus = () => {
    this.setState({ isUser: !this.state.isUser })
  }

  checkUser = () => {
    if (this.state.isUser){
      return (
        <Login />
      )
    } else {
      return (
        <Signup />
      )
    }
  }

  render() {
    return (
      <div>
        {this.checkUser()}
        <button onClick={this.changeUserStatus}>Change</button>
      </div>
    );
  }
}

export default App;
