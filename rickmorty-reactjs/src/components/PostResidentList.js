import React, { Component } from 'react';
import axios from 'axios';


class PostResidentList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lists: [
        //location: name, type, resident, resident status, image 
      ], 
      errorMsg: ''
    }
  }

  componentDidMount() {
    axios.get("https://rickandmortyapi.com/")
    .then(response => {
      this.setState({
        lists: response.data
      })
      console.log(response.data)
    })
      .catch(err => {
        console.log(err)
        this.setState({ errorMsg: 'Error retrieving data' })
    })
  }

  render() {
    const {lists}  =this.state
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

export default PostResidentList;