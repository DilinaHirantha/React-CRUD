import React, {Component} from 'react';
import axios from "axios";
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate(prevProps, prevState, snapshot) { /*update component*/
        if (this.props.id) {
            if (this.props.id !== prevProps.id) {/*to stop call life cycle until new post*/
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        this.setState({
                            loadedPost: response.data
                        })
                    }).catch(error => {
                    console.log(error);
                });
            }
        }
    }

    postDeleteHandler = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Plz select a post</p>;
        if (this.props.id) {
            let post = <p style={{textAlign: 'center'}}>Loading....!</p>;
        }
        if (this.state.loadedPost) { /* check loadPost updated or not state*/
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete"
                                onClick={() => this.postDeleteHandler(this.state.loadedPost.id)}>Delete
                        </button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;
