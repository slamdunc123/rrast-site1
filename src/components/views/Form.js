import React, { Component } from 'react'

class Tests extends Component{
constructor(props) {
  super(props);
  this.state = {
    newsLetter: true,
    email: '',
    password: ''
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  // console.log(`Input name ${name}. Input value ${value}.`);

  this.setState({
    [name]: value
  });
}

handleSubmit(event){
  event.preventDefault();
  console.log(this.state);
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        I wish to receive your email newsletter.
        <input
          name="newsLetter"
          type="checkbox"
          checked={this.state.newsLetter}
          onChange={this.handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.handleInputChange} />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="text"
          value={this.state.password}
          onChange={this.handleInputChange} />
      </label>
      <input type="submit"/>
    </form>
  );
}
}



export default Tests
