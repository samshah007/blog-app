import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios';
import './Blog.css';

class Blog extends Component {
    state = {
        posts:[],
        selectedPost:null,
        error:false
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
            const posts = response.data.slice(0,4)
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author:'Shyamal'
                }
            });
            this.setState({
                posts:updatedPosts
            });
        })
        .catch(error => {
            this.setState({error:true});
        });
    }
    selectPostHandler = (id) => {
        this.setState({
            selectedPost:id
        })
    }
    render () {
        let posts = <p style={{textAlign:'center'}}>Something went wrong</p>;
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.selectPostHandler(post.id)}></Post>
            })
        }        
        return (
            <div>
                <section className="Posts">
                {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;