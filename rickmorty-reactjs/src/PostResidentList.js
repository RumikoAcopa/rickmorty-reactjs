import React, { Component } from 'react';
import axios from 'axios';


class PostResidentList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get("https://rickandmortyapi.com/");
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )

  
  }



}

export default PostResidentList;