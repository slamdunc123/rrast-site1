import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { fetchApiTodos } from '../../redux/actions/apiTodosActions'

class ApiTodos extends Component {

    componentDidMount(){
        this.props.fetchApiTodos();
    }

    handleClick(){
        alert('You clicked the Todos button');
    }

    render(){
        console.log(this.props.apitodos); //check if api data is being fetched
        return(
            <div className="container">
            <button className="btn btn-primary" onClick={this.handleClick}>Todos</button>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.apitodos.map(apitodo =>
                            <tr key={apitodo.id}>
                                <td>{apitodo.id}</td>
                                <td>{apitodo.title}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    apitodos: state.apitodos.apitodos
})

export default connect(mapStateToProps, { fetchApiTodos })(ApiTodos);