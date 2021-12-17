import React, { Component } from "react";
import axios from "axios";

class GetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [
        //location: name, type, resident, resident status, image
      ],
      errorMsg: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://rickandmortyapi.com/", this.state)
      .then((response) => {
        this.setState({
          lists: response.data
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    const { lists } = this.state;
    return (
      <div>
        <h1>List of Residents</h1>
        {lists.map((list) => (
          <div key={list.id}>{list.location}</div>
        ))}
      </div>
    );
  }
}

export default GetList;
