import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { fetchApiOpenWeathers } from '../../redux/actions/apiOpenWeathersActions'

class ApiOpenWeathers extends Component {

    componentDidMount(){
        this.props.fetchApiOpenWeathers();
    }

    handleClick(){
        alert('You clicked the OpenWeathers button');
    }

    render(){
        console.log(this.props.apiopenweathers); //check if api data is being fetched
        return(
            <div className="container">
            <button className="btn btn-primary" onClick={this.handleClick}>OpenWeathers</button>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>date/time</th>
                            <th>weather</th>
                            <th>temperature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.apiopenweathers.map(apiopenweather =>
                            <tr key={apiopenweather.dt_txt}>
                                <td>{apiopenweather.dt_txt}</td>
                                <td>{apiopenweather.weather[0].main}</td>
                                <td>{Math.floor(apiopenweather.main.temp - 273.15)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    apiopenweathers: state.apiopenweathers.apiopenweathers
})

export default connect(mapStateToProps, { fetchApiOpenWeathers })(ApiOpenWeathers);