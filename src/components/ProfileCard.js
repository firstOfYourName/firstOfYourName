// ProfileCard.js

import React, {Component} from 'react'

import Draggable, {DraggableCore} from 'react-draggable'

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

        {/* <div className="profile_wrapper handle score-board"> */}
          {/* <div className="card" id="scoreCard"> */}
            {/* <div className="row"> */}
              <div className="card col-5" id="clipboard">
                <div className="profile_info" id="clipboard">
                  <div className="profile_details">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg-dark">
                        <h3>{this.props.username}</h3>
                      </li>
                      <li className="list-group-item bg-dark">Titles: {finalTitles}</li>
                      <li className="list-group-item bg-dark">Correct Answers: {this.props.correctAns}</li>
                      <li className="list-group-item bg-dark">Wrong Answers: {this.props.incorrectAns}</li>
                    </ul>
                  </div>
                </div>
              {/* </div> */}
            {/* </div> */}
          </div>
        {/* </div> */}
      </Draggable>
    )
  }
}
