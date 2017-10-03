import React, { Component } from 'react'
import axios from 'axios'
let apiLink = "https://www.anapioficeandfire.com/api/"

export default class CharacterCard extends Component {

  componentDidMount () {
    apiLink += this.props.url
    axios.get(apiLink).then((response) => {
      console.log(response.data);
    } ) //fetch with the link we make from the props url
    //then: fill in the below fields with the response
    //let charInfo = response.data.blah
  }
  render() {
    //let charInfo = response.data
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title"></h4>

        </div>
      </div>
    )
  }

}
// let characterDataObj = {
//   "name": "",
//   "culture": "",
//   "born": "",
//   "died": "",
//   "titles": [],
//   "aliases": [],
//   "playedBy": []
// }
