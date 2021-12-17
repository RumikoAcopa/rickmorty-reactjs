import React, { Component } from "react";
import axios from "./axios"

class CharacterNotes extends Component {

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
    axios.post("https://jsonplaceholder.typicode.com/guide");
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

export default CharacterNotes;
