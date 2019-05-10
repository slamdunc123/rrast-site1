import React, { Component } from 'react';

import axios from 'axios';

class RandomUsers extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            users : []
        }
        console.log('url prop received - ' + this.props.url);
        console.log(this.state.users);
    }
    
    componentDidUpdate(prevProps){
        
        let apiURL = this.props.url;

        console.log(apiURL);
        // console.log(prevProps.apiURL);

        axios.get(apiURL)
        .then(res => {
            console.log(apiURL);
            const usersArr = res.data.results;
            console.log(usersArr);
            console.log(res.data);
            if(this.props.url !== prevProps.url){
                this.setState({
                    users: usersArr
                })
                console.log(res.data.results);
                console.log(this.state.users);
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
                    <th>id</th>
                    <th>name</th>
                    </tr>
                    </thead>
                    <tbody>
            {this.state.users.map(user =>
            <tr key={user.login.uuid}>
                <td>{user.login.uuid}</td>
                <td>{user.name.first}</td>
            </tr>
            )}
        </tbody>
        </table>
        </div>
        );
      }
    }

    export default RandomUsers;
    