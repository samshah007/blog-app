import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';

class Posts extends Component {
    state = {
        posts:[]
    }
    componentDidMount() {
        axios.get('/posts')
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
            console.log(error);
            //this.setState({error:true});
        });
    }
    selectPostHandler = (id) => {
        this.props.history.push({pathname:'/' + id});
    }
    render(){
        let posts = <p style={{textAlign:'center'}}>Something went wrong</p>;
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                        //<Link to={'/' + post.id} key={post.id}>
                            <Post
                                key={post.id}                                 
                                title={post.title} 
                                author={post.author}
                                clicked={() => this.selectPostHandler(post.id)}>
                            </Post>
                        //</Link>
                        )
            })
        }  
        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}
export default Posts;