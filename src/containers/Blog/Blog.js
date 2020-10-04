import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, Link } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {    
    render () {              
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>                            
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>}></Route> */}   
                <Route path='/' exact component={Posts}></Route>
                <Route path='/new-post' component={NewPost}></Route>         
            </div>
        );
    }
}

export default Blog;