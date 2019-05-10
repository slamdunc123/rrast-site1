import React, { Component } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';


class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forecasts: []
        }
        console.log('url prop received - ' + this.props.url);
    }

    // get data from api url
    componentDidUpdate(prevProps) {

        let apiURL = this.props.url;

        console.log(apiURL);
        console.log(prevProps.apiURL);

        axios.get(apiURL)
            .then(res => {
                console.log(apiURL);
                const forecastsArr = res.data.list;
                console.log(res.data);
                if (this.props.url !== prevProps.url) {
                    this.setState({ // set new state 

                        forecasts: forecastsArr // grab 10 records from the data object in the response
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        console.log(this.props.url);
        return (
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>date/time</th>
                            <th>forecast</th>
                            <th>temp</th>
                            <th>humidity</th>
                            <th>image</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.forecasts.map(forecast =>
                            <tr key={forecast.dt}>
                                <td>{forecast.dt_txt}</td>
                                <td>{forecast.weather[0].description}</td>
                                <td>{Math.floor(forecast.main.temp - 273.15)}</td>
                                <td>{forecast.main.humidity}</td>
                                <td>{forecast.main.humidity > 85 ? 'steamy' : 'drips'}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        )
    }
}


export default Weather;

