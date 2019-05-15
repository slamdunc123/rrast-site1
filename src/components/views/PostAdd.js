import React, { Component } from 'react'

class PostAdd extends Component {
    state = {
        title: 'title1'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let titleAdded = [...this.state.title, e.target.title]
        this.setState({
            
            title: titleAdded
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h5>Add Post</h5>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">ID</label>
                    <br/>
                    <input type="text" id="id" onChange={this.handleChange} />
                    <br/>
                    <label htmlFor="name">Title</label>
                    <br/>
                    <input type="text" id="title" onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <button>Submit</button>
                </form>
                <br/>
            </div>
        )
    }
}

export default PostAdd
