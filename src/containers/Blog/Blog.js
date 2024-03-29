import React, {Component} from 'react';
import axios from '../../axios'; // use axios instance
import './Blog.css';
import Posts from "./Posts/Posts";
import {Route} from "react-router";
import NewPost from "./NewPost/NewPost";
import {Link} from "react-router-dom";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true' // query parameters
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/> // exact true for current path = path*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
                <Route path="/:id" exact component={FullPost}/>
            </div>
        );
    }
}

export default Blog;
