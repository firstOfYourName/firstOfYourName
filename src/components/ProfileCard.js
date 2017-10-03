// ProfileCard.js

import React, {Component} from 'react'

import Draggable, {DraggableCore} from 'react-draggable'

import '../styles/triviaCard.css'

export default class ProfileCard extends Component {

  eventLogger = (e: MouseEvent, data: Object) => {
     console.log('Event: ', e);
     console.log('Data: ', data);
   };

  render() {
    let finalTitles = "";
    this.props.titles.forEach(function (item) {(
      finalTitles += (", " + item)
    )})
    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{
          x: 400,
          y: -350
        }}
        position={null}
        grid={[25, 25]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>

        <div className="profile_wrapper handle score-board">
          <div className="card" id="scoreCard">
            <div className="row">
              <div className="card col-5">
                <div className="profile_info">
                  <div className="profile_details" id="clipboard">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg-secondary">
                        <h3>{this.props.username}</h3>
                      </li>
                      <li className="list-group-item bg-secondary"><ul className="list-group list-group-flush"><label className="titles">Titles:</label><li className=""><p>{finalTitles}</p></li></ul></li>
                      <li className="list-group-item bg-secondary">Correct Answers: {this.props.correctAns}</li>
                      <li className="list-group-item bg-secondary">Wrong Answers: {this.props.incorrectAns}</li>
                    </ul>
                  </div>
                </div>
              </div>
             </div>
          </div>
        </div>
      </Draggable>
    )
  }
}
