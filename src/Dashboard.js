import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Dashboard extends React.Component {

    constructor(){
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            console.log(users)
            this.setState({users: users})
        })
    }

    showUsersData = () => {
        return this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <h3>{user.name}</h3> 
                    Email: {user.email}
                </div>
            )
        })
    }

    render(){
        return (
            <div>
                <Navbar emailValueFromApp={this.props.emailValueFromApp}/>


                Dashboard Component
                {this.showUsersData()}


                <Footer />
            </div>
        )
    }
}

export default Dashboard;