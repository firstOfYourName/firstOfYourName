// ProfileCard.js

import React, {Component} from 'react'

import Draggable, {DraggableCore} from 'react-draggable'

export default class ProfileCard extends Component {

  eventLogger = (e: MouseEvent, data: Object) => {
     console.log('Event: ', e);
     console.log('Data: ', data);
   };

  render() {
    return (
      <Draggable axis="both" handle=".handle" defaultPosition={{
        x: -225,
        y: -350
      }} position={null} grid={[25, 25]} onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>

        <div className="profile_wrapper handle score-board">
          <div className="row">
            <div className="col-5">
              <div className="profile_info">
                <div className="profile_details">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-dark">
                      <h3>{this.props.username}</h3>
                    </li>
                    <li className="list-group-item bg-dark">Titles: {this.props.titles}</li>
                    <li className="list-group-item bg-dark">Correct Answers: {this.props.correctAns}</li>
                    <li className="list-group-item bg-dark">Wrong Answers: {this.props.incorrectAns}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}
