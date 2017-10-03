import React, {Component} from "react";
import { getRandomDeath } from '../content/deaths'

import TriviaHeader from "../components/TriviaHeader"

export default class LoseView extends Component{

  render(){
    let finalTitles = "";
    this.props.titles.forEach(function (item) {(
      finalTitles += (", " + item)
    )})
    let className = `hw-100-percent death ${this.props.bodyClassName.trivia}`
    return(
      <div className={className}>
        <h1>You Have Died!</h1>
        <p className="col-md-10 mx-auto">{this.props.username}{finalTitles}, you have been {this.props.obit}.</p>
        <p className="mx-auto">Valar Morghulis.</p>
        <a className="mx-auto" href="/#/"><button className="btn btn-#808080 btn-lg">Home.</button></a>
      </div>
    )
  }
}
