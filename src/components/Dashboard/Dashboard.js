import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            search: '',
            myPosts: false,
            posts: []
        }
    }

    
    // {title: 'this is a title', author: 'somebody', profile: 'https://robohash.org/lsdfasoih'},
    // {title: 'title', author: 'nobody', profile: 'https://robohash.org/asdjfoai'},
    // {title: 'post', author: 'anybody', profile: 'https://robohash.org/another'},
    // {title: 'this is another title', author: 'busybody', profile: 'https://robohash.org/yetanother'}


    componentDidMount() {
        axios.get("/api/posts").then(response => {
            this.setState({
                posts: response.data
            })
        })
    }

    updateSearch(e) {
        this.setState({
            search: e.target.value
        })
    }

    searchPosts() {
        let {search, myPosts} = this.state
        let endpoint = "";
        if(search && myPosts) {
            return endpoint = `?search=${search}&userposts=${myPosts}`;
        } else if (!search && myPosts) {
            return endpoint = `?userposts=${myPosts}`;
        } else if(search && !myPosts) {
            return endpoint = `?search=${search}`;
        } else {
            return endpoint;
        }
        axios.get(`/api/search/${this.props.userid}${endpoint}`, {search, myPosts}).then(response => {
            // /api/posts/${this.props.userid}?search=${search}&userposts=${myPosts}
            this.setState({
                posts: response.data
            })
        })
    }

    reset() {
        this.setState({
            search: '',
            myPosts: false
        })
    }

    updateMyPostSelector() {
        this.setState({
            myPosts: !this.state.myPosts
        })
    }

    render() {
        let displayPosts = [];
        console.log(this.state.posts);
        this.state.posts.map((post,i) => {
            return displayPosts.push(<Link to={`/post/${post.id}`}><Post key={i} id={post.id} /></Link>)
        })
        return (
            <div>
                <h1>Dashboard</h1>
                <input type="text" placeholder="search" value={this.state.search} onChange={(e) => this.updateSearch(e)} />
                <input type="checkbox" onClick={() => this.updateMyPostSelector()} />
                <label>My Posts</label>
                <button onClick={() => this.searchPosts()}>Search</button>
                <button>Reset</button>
                {displayPosts}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userid: state.id
    }
}

export default connect(mapStateToProps)(Dashboard);