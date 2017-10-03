import React, {Component} from "react"
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import ThronepediaHeader from "../components/ThronepediaHeader"


export default class CharactersView extends Component{
  constructor(){
    super()
    this.state = {
    selectedCharacter: "",
    }
  }
  handleSelect = (event) => {
    this.setState({selectedCharacter: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/thronepedia/characters/${this.state.selectedCharacter}`)

  }
  render(){
    let className = `hw-100-percent ${this.props.bodyClassName.thronepedia}`
    return(
      <div className={className}>
        <ThronepediaHeader/>
        <div className="carousel-div col-6 mx-auto">
        <Carousel>
          <div>
              <img src="./bronn.jpg" />
            <p className="legend">Bronn of the Blackwater</p>
          </div>
          <div>
            <a href='#'>
              <img src="./brynden.jpg" />
            </a>
            <p className="legend">Brynden Tully, the Blackfish</p>
          </div>
          <div>
            <a href='#'>
              <img src="./cersei.jpg" />
            </a>
            <p className="legend">Cersei Lannister</p>
          </div>
          <div>
            <a href='#'>
              <img src="./davos.jpg" />
            </a>
            <p className="legend">Davos Seaworth, the Onion Knight</p>
          </div>
          <div>
            <a href='#'>
              <img src="./hound.jpg" />
            </a>
            <p className="legend">Sandor Clegane, the Hound</p>
          </div>
          <div>
            <a href='#'>
              <img src="./jaime.jpg" />
            </a>
            <p className="legend">Jaime Lannister</p>
          </div>
          <div>
            <a href='#'>
              <img src="./Littlefinger.jpg" />
            </a>
            <p className="legend">Petyr Baelish</p>
          </div>
          <div>
            <a href='#'>
              <img src="./Renly.jpg" />
            </a>
            <p className="legend">Renly Baratheon</p>
          </div>
          <div>
            <a href='#'>
              <img src="./sansa.jpg" />
            </a>
            <p className="legend">Sansa Stark</p>
          </div>
          <div>
            <a href='#'>
              <img src="./tyrion.jpg" />
            </a>
            <p className="legend">Tyrion Lannister</p>
          </div>
          <div>
            <a href='#'>
              <img src="./varys.jpg" />
            </a>
            <p className="legend">Varys, the Spider</p>
          </div>
        </Carousel>
        <form action="">
          <select onChange={this.handleSelect} name="" class="bg-dark">
            {this.props.majorCharsArr.map((CharInfo) => {
              return(
                <option
                    key= {CharInfo.character}
                    value={CharInfo.character}>{CharInfo.character}</option>
              )
            })}
          </select>
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
        </div>
      </div>
    )
  }
}
// ReactDom.render(<CrestCarousel />, document.querySelector('.CrestCarousel'))
