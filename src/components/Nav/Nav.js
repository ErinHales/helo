import React from 'react';
import {Link} from 'react-router-dom';

//"with router" to provide router props to functional component

export default function Nav(props) {
    if(window.location.href === "http://localhost:3000/#/") {
        return null;
    } else {
        return (
            <div>
                <h1>Nav Bar</h1>
                <Link to="/dashboard">Home</Link>
                <Link to="/new">New Post</Link>
                <Link to="/">Logout</Link>
            </div>
        ) 
    }
}