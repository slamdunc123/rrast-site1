import React, { Component } from 'react'

import RandomUsers from './RandomUsers'

let numArr = [
    {val: 5},
    {val: 10},
    {val: 15},
    {val: 20}
    ];
console.log(numArr);

class Numbers extends Component {
    constructor(props){
        super(props);
        this.state = { // set initial state
            nums: numArr,
            apiURL: "https://randomuser.me/api/?results=5;"
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        // console.log(this.state.apiURL);
        console.log(event.target.value);
        let value = event.target.value;
        this.setState({
            value: value,
            apiURL: "https://randomuser.me/api/?results=" + value
        
         }
        
         );
       
        
    }

    render() {
        return (
            <div>
                <select  onChange={this.handleChange}>
                    {this.state.nums.map(num =>
                        <option value={num.val}>
                            {num.val}
                        </option>
                        // <div key={city.id}>
                        //     <div>{city.id}</div>
                        // </div> 
                    )}
                </select>
                {console.log('url prop sent - ' + this.state.apiURL)}
                <RandomUsers url={this.state.apiURL}/>
                {/* ok - up to here */}
            </div>
        )
    }
}

export default Numbers;
