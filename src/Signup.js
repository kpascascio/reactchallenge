import React , { Component } from 'react';

class SignUp extends Component {
    constructor () {
        super(); 
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div>
                <form>
                <h1>Sign Up</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="emailField" name="email" className="input-field" onChange= {this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>   
                        <input type="password" id="passwordField" name="password" className="input-field" onChange= {this.handleChange}/>
                    </div>
                    <input type="button" value="Submit"/>
                </form>   
            </div>
        )    
    }
}

export default SignUp;

