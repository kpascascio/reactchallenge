import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';


class SignUp extends Component {
    constructor () {
        super(); 
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (e) => {
        console.log(this.state)
        this.props.userFunctionFromApp(this.state);
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="emailField" name="email" className="input-field" onChange= {this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>   
                        <input type="password" id="passwordField" name="password" className="input-field" onChange= {this.handleChange}/>
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                    {/* <input type="button" value="Submit"/> */}
                </form>   
            </div>
        )    
    }
}

export default SignUp;

