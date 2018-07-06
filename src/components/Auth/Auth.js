import React, {Component} from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            userData: {}
        }
    }

    handleChange(prop, e) {
        this.setState({
            [prop]: e.target.value
        })
    }

    register(username, password) {
        axios.post("/api/register", {username,password}).then(response => {
            window.location.href = "http://localhost:3000/#/dashboard";
            this.setState({
                userData: response.data
            })
        })
    }

    login(username, password) {
        axios.post("/api/login", {username,password}).then(response => {
            window.location.href = "http://localhost:3000/#/dashboard";
            this.setState({
                userData: response.data
            })
        })
    }
    
    render() {
        const {username, password} = this.state;
        console.log(this.state.userData);
        return (
            <div>
                <input type="text" placeholder="username" onChange={(e) => this.handleChange("username",e)} />
                <input type="text" placeholder="password" onChange={(e) => this.handleChange("password",e)} />
                <button onClick={() => this.login(username, password)}>Login</button>
                <button onClick={() => this.register(username, password)}>Register</button>
            </div>
        )
    }
}