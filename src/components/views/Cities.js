import React, { Component } from 'react'

import Weather from './Weather'

let citiesArr = require('../../../src/city.list.subset.json');

// console.log(cities[0].id);
// let x = Math.floor(Math.random() * 3);
// let cityId = citiesArr[x].id;
// let cityName = citiesArr[x].name;

console.log(citiesArr);

class Cities extends Component {
    constructor(props){
        super(props);
        this.state = { // set initial state
            cities: citiesArr,
            value: '',
            apiURL: "http://api.openweathermap.org/data/2.5/forecast?id=519188&APPID=9e3b41b556d2b7085e43777a1f5d5923"
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        console.log(this.state.apiURL);
        console.log(event.target.value);
        let value = event.target.value;
        this.setState({
            value: value,
            apiURL: "http://api.openweathermap.org/data/2.5/forecast?id=" + value + "&APPID=8f3bce6554087613da59a6627c23c861"
         } 
         
        //  ,
        //     this.changeStyle // callback function to ensure change is made at the right moment
         );
        // console.log(this.state);
        // console.log(event.target.value);
        // console.log(this.state.cityId);
        
    }

    render() {
        return (
            <div className="container">
                <select onChange={this.handleChange}>
                <option value="">Choose a city</option>
                    {this.state.cities.map(city =>
                        <option value={city.id}>
                            {city.name}
                        </option>
                    )}
                </select>
                <br/>
                <br/>
                <div>{this.state.value}</div>
                
                {console.log('url prop sent - ' + this.state.apiURL)}
                <Weather url={this.state.apiURL}/>
                {/* ok - up to here */}
            </div>
        )
    }
}

export default Cities;
