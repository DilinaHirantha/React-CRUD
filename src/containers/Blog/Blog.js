import React, {Component} from 'react';
import axios from '../../axios'; // use axios instance
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
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
            return <Post key={p.id} title={p.title} author={p.author}
                         clicked={() => this.postSelectedHandler(p.id)}/> /* pass as argument to function ES6*/
        })
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;
