import React, { Component } from "react";
import axios from "./axios"

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: " "
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/guide", this.state);
      .then(response => {
      console.log(response);
    })
      .catch(err => {
      console.log(err);
    })
  };

  render() {
    const { notes } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='notes'
              value={notes}
              onChange={this.handleChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
