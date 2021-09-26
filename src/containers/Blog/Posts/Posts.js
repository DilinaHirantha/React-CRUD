import React, {Component} from 'react'
import axios from '../../../axios';
import Post from "../../../components/Post/Post";
import './Posts.css'
import {Link} from "react-router-dom";

class Posts extends Component {
    state = {
        posts: [],
        selectedId: null
    }

    componentDidMount() { /* initial */
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const post = response.data.slice(0, 4);
                const updatedPost = post.map(post => {
                    return {
                        ...post,
                        author: 'Dilina'
                    }
                })
                this.setState({posts: updatedPost})
            }).catch(error => {
            console.log(error);
        });

    }

    postSelectedHandler = (id) => {
        this.setState({selectedId: id})
    }


    render() {
        const post = this.state.posts.map(p => {
            return (
                <Link to={'/' + p.id} key={p.id}>
                    <Post title={p.title}
                          author={p.author}
                          clicked={() => this.postSelectedHandler(p.id)}/> {/*pass as argument to function ES6*/}
                </Link>
            )
        })

        return (
            <section className="Posts">
                {post}
            </section>
        );
    }

}


export default Posts
