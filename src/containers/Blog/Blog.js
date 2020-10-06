import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';
import FullPost from './FullPost/FullPost';

import './Blog.css';

class Blog extends Component {    
    render () {              
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>                            
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>}></Route> */}
                <Switch>   
                    <Route path='/' exact component={Posts}></Route>
                    <Route path='/new-post' component={NewPost}></Route>
                    <Route path='/:id' exact component={FullPost}></Route>
                </Switch>         
            </div>
        );
    }
}

export default Blog;