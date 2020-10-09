import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {    
    render () {              
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>                            
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>}></Route> */}
                <Switch>
                    <Route path='/new-post' component={NewPost}></Route>   
                    <Route path='/posts' component={Posts}></Route>
                    <Redirect from="/" to="/posts"></Redirect>                                        
                </Switch>         
            </div>
        );
    }
}

export default Blog;