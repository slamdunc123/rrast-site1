import React from 'react';

import axios from 'axios';

class RandomUsers extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    
    componentDidUpdate(prevProps){
        
        console.log(this.props.url);
        axios.get(this.props.url)
        .then(response => {
            const data = response.data.results;
            if(this.props.url !== prevProps.url){
                this.setState({
                    data
                })
                // console.log(response.data.results);
            }
            
        })
        
        .catch(error => {
            console.log(error);
        })
    
    }

    render() {

        return (
          <div>
            {this.state.data.map(item =>
            <div key={item.login.uuid}>
                <div>{item.login.uuid}</div>
                <div>{item.gender}</div>
            </div>
            )}
        </div>
        );
      }
    }

    export default RandomUsers;
    