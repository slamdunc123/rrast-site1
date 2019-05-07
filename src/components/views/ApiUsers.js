import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { fetchApiUsers } from '../../redux/actions/apiUsersActions'

class ApiUsers extends Component {

    componentDidMount(){
        this.props.fetchApiUsers();
    }

    handleClick(){
        alert('You clicked the Users button');
    }

    render(){
        console.log(this.props.apiusers);
        return(
            <div className="container">
            <button className="btn btn-primary" onClick={this.handleClick}>Users</button>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.apiusers.map(apiuser =>
                            <tr key={apiuser.id}>
                                <td>{apiuser.id}</td>
                                <td>{apiuser.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    apiusers: state.apiusers.apiusers
})

export default connect(mapStateToProps, { fetchApiUsers })(ApiUsers);