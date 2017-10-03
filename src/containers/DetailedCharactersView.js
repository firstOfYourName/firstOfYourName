import React, {Component} from "react"

import ThronepediaHeader from '../components/ThronepediaHeader'
import CharacterCard from '../components/CharacterCard'

export default class DetailedCharactersView extends Component{



  render(){
    console.log(this.props.match);
    let className = `hw-100-percent ${this.props.bodyClassName.thronepedia}`
    return(
      <div className={className}>
        <ThronepediaHeader/>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">i am the detailed character</h4>

          </div>
        </div>
      </div>
    )
  }
}
