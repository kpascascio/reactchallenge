import React, { Component } from 'react';
import './App.css';
import Signup from './Signup'; 
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

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
      return Login
    } else {
      return Signup
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={this.checkUser()}/>
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        
          <button onClick={this.changeUserStatus}>Change</button>
        </div>
      </Router>
    );
  }
}

export default App;
