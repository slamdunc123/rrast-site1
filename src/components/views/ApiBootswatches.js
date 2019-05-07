import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { fetchApiBootswatches } from '../../redux/actions/apiBootswatchesActions'

class ApiBootswatches extends Component {

    componentDidMount(){
        this.props.fetchApiBootswatches();
    }

    handleClick(){
        alert('You clicked the Bootswatches button');
    }

    render(){
        console.log(this.props.apibootswatches); //check if api data is being fetched
        return(
            <div className="container">
            <button className="btn btn-primary" onClick={this.handleClick}>Bootswatches</button>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>css</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.apibootswatches.map(apibootswatch =>
                            <tr key={apibootswatch.name}>
                                <td>{apibootswatch.name}</td>
                                <td>{apibootswatch.css}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    apibootswatches: state.apibootswatches.apibootswatches
})

export default connect(mapStateToProps, { fetchApiBootswatches })(ApiBootswatches);