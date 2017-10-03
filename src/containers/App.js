import React, {Component} from 'react';
import '../styles/App.css';
import {Route, Switch, HashRouter} from 'react-router-dom'
import _ from "lodash"

import { getRandomTitle } from '../content/titles'
import { getRandomDeath } from '../content/deaths'

import majorCharsArr from '../content/characterdata'
import HomeView from './HomeView'
import ThronepediaView from './ThronepediaView'
import RegionsView from './RegionsView'
import HousesView from './HousesView'
import CharactersView from './CharactersView'
import DetailedRegionsView from './DetailedRegionsView'
import DetailedHousesView from './DetailedHousesView'
import DetailedCharactersView from './DetailedCharactersView'
import TriviaView from './TriviaView'
import WinView from './WinView'
import LoseView from './LoseView'

class App extends Component {
  constructor() {
    super()
    this.state = {
      bodyClassName: {
        home: "home-view",
        thronepedia: "thronepedia-view",
        trivia: "trivia-view"
      },
      username: "",
      correctAns: 0,
      incorrectAns: 0,
      titles: [],
      isDead: false,
      obit: "",
      majorCharsArr: majorCharsArr,
      backgroundUrls: {
        level1: "level-1",
        level2: "level-2",
        level3: "level-3",
        level4: "level-4",
        level5: "level-5",
        level6: "level-6",
        level7: "level-7",
        level8: "level-8",
        level9: "level-9",
        level10: "level-10"
      }
    }
  }
  // I think we should be able to make a className that is level + {correctAns} so we end up on the correct background
  // I may need help making this happen

  _handleUsername = (username) => {
    this.setState({
      username: username,
      correctAns: 0,
      incorrectAns: 0,
      titles: ["bastard"]
    })
  }

  _handleAnswer = (guessedChar, answer) => {
    let correctCount = this.state.correctAns;
    let incorrectCount = this.state.incorrectAns;
    let titlesArr = this.state.titles;
    let deathstatement = getRandomDeath()
    if (guessedChar === answer) {
      correctCount += 1;
      titlesArr.push(getRandomTitle())
      this.setState({
        correctAns: correctCount,
        titles: titlesArr
      })
    } else {
      incorrectCount += 1;
      if (incorrectCount == 5){
        this.setState({
          isDead: true,
          obit: deathstatement
        });
      }
      this.setState({ incorrectAns: incorrectCount})
    }
  }
  // also add a title?  talk with Ryan about this one.

  // we need to pass {...this.state} to our trivia since the homepage makes the user and resets values back to empty

  render() {
    return (
      <div className="App hw-100-percent">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First of Your Name</h1>
        </header> */}
        <HashRouter>
          <Switch>
            <Route exact path='/' component={() => <HomeView {...this.state} handleUsername={this._handleUsername}/>}/>
            <Route exact path='/thronepedia' component={() => <ThronepediaView {...this.state}/>}/>
            <Route exact path='/thronepedia/regions' component={() => <RegionsView {...this.state}/>}/>
            <Route exact path='/thronepedia/houses' component={() => <HousesView {...this.state}/>}/>
            <Route exact path='/thronepedia/characters' component={(props) => <CharactersView {...props} {...this.state}/>}/>
            <Route exact path='/thronepedia/regions/:name' component={() => <DetailedRegionsView {...this.state}/>}/>
            <Route exact path='/thronepedia/houses/:name' component={() => <DetailedHousesView {...this.state}/>}/>
            <Route exact path='/thronepedia/characters/:name' component={(props) => <DetailedCharactersView
              {...props}
              {...this.state}/>}/>
            <Route exact path='/trivia' component={
              () => this.state.isDead ? <LoseView {...this.state} /> : (
                <TriviaView
                  {...this.state}
                  handleAnswer={this._handleAnswer}
                />)
            }/>
            <Route exact path='/trivia/win' component={() => <WinView {...this.state}/>}/>
            <Route exact path='/trivia/lose' component={() => <LoseView {...this.state}/>}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

// for the trivia route within component prop for Route
// () => this.state.isDead ? <LoseView {...this.state} /> : <TriviaView/>

export default App;
