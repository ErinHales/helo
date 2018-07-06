import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {userInfo} from '../../ducks/reducer';

class Auth extends Component {
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
                userData: response.data[0]
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
        const {username, password, userData} = this.state;
        console.log(userData.id);
        return (
            <div>
                <input type="text" placeholder="username" onChange={(e) => this.handleChange("username",e)} />
                <input type="text" placeholder="password" onChange={(e) => this.handleChange("password",e)} />
                <button onClick={() => {
                    this.login(username, password);
                    userInfo(userData.id,userData.username, userData.picture);
                    }}>Login</button>
                <button onClick={() => this.register(username, password)}>Register</button>
            </div>
        )
    }
}

export default connect(null, {userInfo})(Auth);