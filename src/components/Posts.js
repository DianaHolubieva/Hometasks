import React, {Component} from 'react';
import {PostApiService} from "../services/post.api.service";
import Post from "./Post";

class Posts extends Component {
    state = {posts: [], y: 'qwerty'};


    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.postApiService = new PostApiService();
        this.postApiService.getPosts().then(value => this.setState({posts: value}));
    }

    render() {
        return (<div>
            {this.state.posts.map(value => <Post key={value.id} item={value}></Post>)}
        </div>);
    }
}

export default Posts;