import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { fetchApiBootswatches } from '../../redux/actions/apiBootswatchesActions'

class BootswatchesChanger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cerulean/bootstrap.min.css'
        };
    }

    componentDidMount() {
        this.props.fetchApiBootswatches();
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ 
            value: event.target.value,
         },
            this.changeStyle // callback function to ensure change is made at the right moment
         );
        console.log(this.state);
        
    }

    changeStyle = () => {
        console.log(this.state);
        // document.getElementById('page-style').setAttribute('href', this.state.value);
        document.getElementById('page-style').setAttribute('href', this.state.value);
        console.log(this.state);
    }

    render() {
        // console.log(this.props.apibootswatches); //check if api data is being fetched
        return (
            <div className="container">
                <select value={this.state.value} onChange={this.handleChange}>
                    {this.props.apibootswatches.map(apibootswatch =>
                        <option value={apibootswatch.css}>{apibootswatch.name}</option>
                    )}
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apibootswatches: state.apibootswatches.apibootswatches
})

export default connect(mapStateToProps, { fetchApiBootswatches })(BootswatchesChanger);