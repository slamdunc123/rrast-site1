import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { fetchApiComments } from '../../redux/actions/apiCommentsActions'

class ApiComments extends Component {

    componentDidMount(){
        this.props.fetchApiComments();
    }

    handleClick(){
        alert('You clicked the Comments button');
    }

    render(){
        console.log(this.props.apicomments); //check if api data is being fetched
        return(
            <div className="container">
            <button className="btn btn-primary" onClick={this.handleClick}>Comments</button>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.apicomments.map(apicomment =>
                            <tr key={apicomment.id}>
                                <td>{apicomment.id}</td>
                                <td>{apicomment.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    apicomments: state.apicomments.apicomments
})

export default connect(mapStateToProps, { fetchApiComments })(ApiComments);