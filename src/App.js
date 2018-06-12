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
      isUser: false,
      usersEmail: ''
    }
  }

  userDetails = (valueFromChildComponent) => {
    this.setState({usersEmail: valueFromChildComponent.email})
  }

  changeUserStatus = () => {
    this.setState({ isUser: !this.state.isUser })
  }

  checkUser = () => {
    if (this.state.isUser){
      return (
        <Login userFunctionFromApp = {this.userDetails}/>
      )
    } else {
      return (
        <Signup userFunctionFromApp = {this.userDetails}/>
      )
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              {this.checkUser()}
            </Route>

            <Route exact path="/dashboard">
              <Dashboard emailValueFromApp= {this.state.usersEmail}/>
            </Route>

          </Switch>
        
          <button onClick={this.changeUserStatus}>Change</button>
        </div>
      </Router>
    );
  }
}

export default App;
