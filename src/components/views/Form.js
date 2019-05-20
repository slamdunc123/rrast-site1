import React, { Component } from 'react'

class Form extends Component{
constructor(props) {
  super(props);
  this.state = {
    newsLetter: true,
    email: '',
    password: ''
  };
 // this function call bindings
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
}

// handle change to form inputs
handleInputChange(event) {
  // console.log(event);

  // get the event.target.name (which will be either "newsletter", "email" or "password")
  // and use it to target the key on our `state` object with the same name, using bracket syntax : eg this.setState({ [event.target.name]: event.target.value });
  //use this method instead of having a handleChange listener on each form element
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value; //this needs additional logig
  const name = target.name; //combine all input name attributes
  console.log(target.name);

  // console.log(`Input name ${name}. Input value ${value}.`); //this logs all the individual changes ie each letter input

  this.setState({ //update state with all form input changes ie gets the values of newsletter, email and password and applies them to bracketed [name] to then update state eg this.setState({ [event.target.name]: event.target.value });
    [name]: value
  });
}

// handle form submit
handleSubmit(event){
  // console.log(event);
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



export default Form
