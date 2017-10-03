import React, {Component} from "react"
import axios from 'axios';
import {fetchRandomQuote, getCorrectAnsObj, getIncorrectAnsObj} from '../../services'
import TriviaHeader from "../components/TriviaHeader"
import TriviaCard from "../components/TriviaCard"
import LoseView from "./LoseView"
import ProfileCard from "../components/ProfileCard"

import '../styles/scrollBackdrop.css'

export default class TriviaView extends Component {
  constructor(){
    super()
    this.state={
      correctAnsObj: {
        answer: "",
        isCorrect: true,
        name: ""
      },
      selectedChar: "",
      guessedChar: "",
      answersArr: [],
      quote: ""
    }
  }

  _handleChoice = (event) => {
    console.log("Clicks fired!");
  }

  _handleLevel = (event) => {
    console.log("Correct! Next Level!");
  }

  componentDidMount () {
    let correctChar = this.state.correctAnsObj.answer;
    let answersArr = this.state.answersArr;
  axios.get("https://got-quotes.herokuapp.com/quotes").then((response) => {
    let newAnswers = getIncorrectAnsObj(response.data.character)

    this.setState({
      answersArr: newAnswers,
      quote: response.data.quote,
      correctAnsObj: {
        ...this.state.correctAnsObj,
        name: response.data.character,
        answer: response.data.character
      }
    })
    answersArr.push(this.state.correctAnsObj)
    answersArr = _.shuffle(answersArr);
  })
}
//REMEMBER we need to Shuffle

_handleInput = (evt) => {
  //set state on answer select
  this.setState({
    selectedChar: evt.target.value
  })
}

_handleSubmit = (evt) => {
  evt.preventDefault();
  this.setState({"guessedChar": this.state.selectedChar});
  this.props.handleAnswer(this.state.selectedChar, this.state.correctAnsObj.answer)
}

  render() {
    let className = `hw-100-percent ${this.props.bodyClassName.trivia}`
    return (
      <div className={className}>

        <TriviaHeader/>
        <div className="parchment mx-auto">
          <div className="questions">
              <br></br>
                <br></br>
                  <br></br>
            <div className="card w-75">
              <div className="row justify-content-center">
            <h2> Who Said It?</h2>
            <p>{this.state.quote}</p>
            </div>
            </div>
          </div>
          <TriviaCard handleSubmit={this._handleSubmit} handleInput={this._handleInput} answersArr={this.state.answersArr}/>
          <ProfileCard {...this.props}/>
        </div>
        </div>
    )}
}
