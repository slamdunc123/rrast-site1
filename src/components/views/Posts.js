import React, { Component } from 'react'

// components
import PostAdd from './PostAdd'

// redux imports
import { connect } from 'react-redux';

class Posts extends Component {

    handleEdit = () => {
        alert('you hit an edit button');
    }

    handleDelete = () => {
        alert('you hit a delete button');
    }

    render() {
        console.log(this.props); // grabs users from mapStateToProps
        return (
            <div className="container">
                <PostAdd />
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.map(post =>
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td><button className="btn btn-warning" onClick={this.handleEdit}>Edit</button></td>
                                <td><button className="btn btn-danger" onClick={this.handleDelete}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

// retrieve state from store and map to the component's props
const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts // passes posts in initState from postsReducer through to posts in rootReducer
    }
}

export default connect(mapStateToProps)(Posts);
