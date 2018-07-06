import React, {Component} from 'react';
import axios from 'axios';


export default class Post extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            author: "",
            picture: "",
            post: "",
            profilePic: ""
        }
    }
    componentDidMount() {
        axios.get(`/api/post/${this.props.id}`).then(response => {
            this.setState({
                title: response.data.title,
                author: response.data.author,
                picture: response.data.picture,
                post: response.data.post,
                profilePic: response.data.image
            })
        })
    }
    
    getPost(id) {
        axios.get(`/api/post/${id}`).then(response => {
            this.setState({
                post: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <h3>{this.state.author}</h3>
                <img className="authorPicture" src={this.state.picture} alt=""/>
                <p>{this.state.post}</p>
                <img src={this.state.profilePic} alt=""/>
            </div>
        )
    }
}