import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value} = event.target; 

    this.setState({
      [name]: value
    }); 
  }; 

  handleFormSubmit = event => {
    event.preventDefault(); 
    alert('Username: ${this.state.username}\nPassword:')
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
