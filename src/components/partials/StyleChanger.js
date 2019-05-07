import React, { Component } from 'react'

class StyleChanger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cerulean/bootstrap.min.css'
        };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        document.getElementById('page-style').setAttribute('href', this.state.value);
    }
        

    handleSubmit = (event) => {
        // document.getElementById('page-style').setAttribute('href', this.state.value);
        event.preventDefault();

    }

    render() {
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}> */}
                    {/* <label> */}
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cerulean/bootstrap.min.css">Cerulean</option>
                            <option value="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css">Cosmo</option>
                            <option value="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cyborg/bootstrap.min.css">Cyborg</option>
                            <option value="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/darkly/bootstrap.min.css">Darkly</option>
                            <option value="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/journal/bootstrap.min.css">Journal</option>
                        </select>
                    {/* </label> */}
                    <br/>
                    {/* <input class="btn btn-primary" type="submit" value="Submit" /> */}
                {/* </form> */}
            </div>
        )
    }
}

export default StyleChanger;
