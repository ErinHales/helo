import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//"with router" to provide router props to functional component

function Nav(props) {
    if(window.location.href === "http://localhost:3000/#/") {
        return null;
    } else {
        return (
            <div>
                <h1>Nav Bar</h1>
                <Link to="/dashboard">Home</Link>
                <Link to="/new">New Post</Link>
                <Link to="/">Logout</Link>
                <h2>{props.username}</h2>
                <img src={props.picture} alt=""/>
            </div>
        ) 
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        picture: state.picture
    }
}

export default connect(mapStateToProps)(Nav);